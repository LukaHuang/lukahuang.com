---
author: Luka
title: "Kubernetes 教學 02 — 在 Minikube 上部屬 Python Flask 應用程式"
published: true
date: 2020-03-10 19:50
tags:
  - Kubernetes
  - Minikube
  - Python
  - Flask
comments: true
---

> Minikube、kubectl 終於派上用場囉

![](https://cdn-images-1.medium.com/max/2088/0*BVfI3gXXICtmPkCu.jpeg)

## 前情提要

在 [前一篇](https://medium.com/starbugs/954caa9b1558) 中我們弄懂了 K8S Cluster、Node、Pod 與 Container 的關係，並且在文章末段介紹了能夠與 kubectl -「能夠與 K8S 溝通的命令列工具」。這次我們用實際的操作，來認識容器化的實際過程，並把它部屬到本地的 Kubernetes 上面。

## 什麼是 Minikube ？

Minikube 是一個單節點的 Kubernetes Cluster，可以安裝在本機上，支援 Windows 與 Mac Minikube 只有一個 Node (節點)。

還記得 Node 是什麼嘛？來複習一下，Node 是一台實體機器，一個工作者 (worker)。上面可以搭載許多個 Pod，而 Pod 是 Kubernetes 的最小部屬單位。一個 Pod 由一個 Container 或是多個 Container 所組成。

看完之後應該還是覺得有點繞，不過沒關係，因為今天我們就要透過實作來了解 Pod 到底是什麼。

### 安裝 Minikube

首先安裝 Minikube，請到[官方網頁](https://kubernetes.io/docs/tasks/tools/install-minikube/)下載安裝，Windows、Mac、Linux 都可以安裝。

Windows 需要先安裝 [Chocolatey](https://chocolatey.org/) 套件管理工具，接著輸入指令

    choco install minikube

即可完成安裝。而 Mac 則可以透過 homebrew 來完成安裝

    brew install minikube 

## 起步走，開始使用 Minikube 與 kubectl

安裝完 minikube 之後，第一步先啟動 Minikube，如果你是第一次啟動，Minikube 會幫你建立新的虛擬機器 (VM)。

    minikube start

眼尖的你看到最後一行，啟動好 minikube 的同時，kubectl 也準備就緒了。來看看 minikube 的狀態。

    minikube status

上一篇提到的 kubelet 與 api-server 已經成功跑起來。複習一下 api-server 是 Master 的元件，kubelet，則是 Node 上負責跟 Master 溝通的元件。因為 Minikube 只有單一個 Node，所以同時具備 Master 與 Node 的元件。

![](https://cdn-images-1.medium.com/max/2000/0*g0EkSg37jwB0wHNb.png)
[ref: https://kubernetes.io/docs/concepts/overview/components/](https://kubernetes.io/docs/concepts/overview/components/)


使用 kubectl 查看目前 Cluster 中的狀態

    kubectl get all

裡面只有一個 kubernetes 的 service，因為我們的 Kubenetes Cluster 中還沒有安裝任何的東西。

## 建立一個 Python 的 Flask Web 應用程式

建立資料夾名稱為 flask_app

    mkdir flask_app

建立一個子資料夾 app ，並在之中建立一個 app.py 檔案

```py
 # flask_app/app/app.py
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello, World!"


if __name == '__main__':
    app.run(debug=True, host='0.0.0.0')
```

建立 requirement.txt

    # flask_app/app/requirement.txt
    Flask

在本地端試跑，先安裝依賴的套件，目前只有一個就是 flask

```
pip3 install -r requirements.txt
```

接著執行看看

```
python main.py
```

打開 [0.0.0.0:5000](http://0.0.0.0:5000/) 即可看到以下訊息

    Hello from Python!

## 容器化 Flask Web 應用程式

建立一個 Dockerfiile，意思是用 Python 3.7 作為基本的容器，並把專案中的程式碼放進去。並在最後執行 python main.py。

 ```dockerfile
FROM python:3.7

RUN mkdir /app
WORKDIR /app
ADD ./app /app/
RUN pip install -r requirements.txt

EXPOSE 5000
CMD ["python", "/app/main.py"]
 ```

製作 docker image，並給他一個名稱flask_app

```
    docker build . -t flask_app
```

可以成功 build，沒有問題

![](https://cdn-images-1.medium.com/max/2000/1*bSSrv5vrsVqBO2xGZbs0qA.png)

用 docker images 查看剛剛製作的 image

![](https://cdn-images-1.medium.com/max/2140/1*ta80syB_HoOKMwLmSLOdQA.png)

跑跑看剛剛製作好的 image

```
    docker run -p 5001:5000 flask_app
```

打開 [http://0.0.0.0:5001/](http://0.0.0.0:5001/) 一樣會看到

    Hello from Python!

到這邊我們已經製作完成 Docker image。接下來就要把它部屬到 Minikube 上。

## **部屬 Python Flask 應用程式到 Minikube 上**

首先我們先來建立一個檔案 k8s.yaml

```yaml

    apiVersion: v1
    kind: Service
    metadata:
      name: flask-app-service
    spec:
      selector:
        app: flask-app
      ports:
      - protocol: "TCP"
        port: 5000
        targetPort: 5000
      type: LoadBalancer
    
    ---
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: flask-app
    spec:
      selector:
        matchLabels:
          app: flask-app
      replicas: 3
      template:
        metadata:
          labels:
            app: flask-app
        spec:
          containers:
          - name: flask-app
            image: flask_app:latest
            imagePullPolicy: Never
            ports:
            - containerPort: 5000
```

命令列輸入，即可將 flask_app 部屬至 minikube

```
kubectl apply -f k8s.yaml
```

部屬完的畫面

![](https://cdn-images-1.medium.com/max/2000/1*G45yB7h77nfGQ--OtDgG1A.png)

接著訪問

剛剛的 k8s.yaml 只有聲明 deployment 與 service 兩種物件，但卻產生了 3 個 pod，原因就在於，deployment 裡面聲明了需要 3 個 pod，所以會擴展出 3 個。

輸入以下指令查看暴露出來的 IP

```
minikube service flask-app-service --url
```

訪問 [http://192.168.64.8:30914](http://192.168.64.8:30914) 就可以看到 Kubernetes 上的 Flask 伺服器回傳的畫面。

    Hello from Python!

剛剛我們撰寫 k8s.yaml 時，Service Type 使用的是 LoadBalancer，所以這可是具有負載均衡能力，並且擁有 3 個 Pod 作為支撐的服務。

是不是很神奇？今天我們做了三種 Hello from Python，分別是：

* 在本地端運行 Flask 伺服器

* 在單個 Docker 容器運行 Flask 伺服器

* 在 Kubernetes 中的 Cluster 運行 Flask 伺服器

一步一步的將應用程式，容器化，之後再用 K8S 打造成產品等級的服務。Kubernetes 就是這麼的有趣！

如果喜歡我寫的文章，歡迎追蹤 本人的帳號 [@LukaTW](https://medium.com/@LukaTw) 與 [StarBugs Weekly 星巴哥技術週刊](https://medium.com/starbugs) 🙂🙂🙂