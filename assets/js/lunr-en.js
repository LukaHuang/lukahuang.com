var idx = lunr(function () {
  this.field('title', {boost: 10})
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')
});



  
  
    idx.add({
      title: "Design Pattern - 資源總整理",
      excerpt: "要學Design Pattern之前, 一定要先搞懂的物件導向基礎: 強烈建議先閱讀91Design Pattern學習的心得之後，再開始學習Design Pattern。文中提到學Design Pattern時必須具備下列的物件導向知識。強調Design Pattern只是幫助物件導向程式達到「高內聚、低耦合」的目的。並且需遵照設計原則來使用。 三大特性：封裝、繼承、多型 兩種抽象：interfact、abstract 目的：高內聚、低耦合 SOLID 原則：單一職責原則、開放封閉原則、里氏替換原則、最小知識原則、介面隔離原則、依賴反轉原則 設計原則：DRY、KISS、YAGNI 設計方式：interface-driven、intention-driven、生成物件與使用物件分開 延伸閱讀： Kent Beck 的四個簡單程式設計原則 一些軟件設計的原則...",
      categories: [],
      tags: ["Design Pattern"],
      id: 0
    });
    
  
    idx.add({
      title: "Design Pattern - Command Pattern",
      excerpt: "定義: Encapsulate a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and...",
      categories: [],
      tags: ["Design Pattern"],
      id: 1
    });
    
  
    idx.add({
      title: "UML - Class Diagram",
      excerpt: "Design Pattern的學習中頻繁的出現著Class Diagram，如果不仔細地了解箇中意思，將會學得很辛苦，因此特別介紹Class Diagram，也就是類別圖。UML中的專有名詞與一般寫程式的專有名詞並不完全相同，例如UML用的一般化（generalization）這個名詞就等於是物件導向語言中「繼承」。而這些UML特有的名詞經常會出現在學習的過程中，如果能夠了解，對學習來說很有幫助，因此建議熟記在Class Diagram中出現的專有名詞。 最後簡單的介紹一下UML，UML是描述物件導向程式的語言，使用圖形來表示我們設計的軟體。從需求設計實作，都可以用UML來表示。而Class Diagram描述著系統的結構，是UML中唯一可以對應實際物件導向程式的UML圖。 能見度(Visibility) 加在Class中的變數或是方法前面。 public:大家都可以使用。 private:只能在自己本身的Class中使用。 protected:跟自己有繼承關係的class皆可共用。 package:在同package下可以使用。 多重性(multiplicity) 關係 類別間的關係是最重要也是最需要釐清地部分，小小的不同意思都會差的很多，請特別注意。 ** Generalization 一般化** 說明：物件導向程式中稱為Inheritance-繼承。表示繼承了父類別。...",
      categories: [],
      tags: ["UML"],
      id: 2
    });
    
  
    idx.add({
      title: "爆炸性的學習",
      excerpt: "這學期我的目標是成為一個有爆炸學習速度的男人\n忽然想到很多值得一試的方法：\n\n\n  \n    聚焦\n一段時間內聚焦於一個小目標，不顧一切的把它完成。避免游移所造成的浪費。\n  \n  \n    用大量的小目標代替一個大目標\n像演算法這種需要大量時間摸索的科目，設立一些小目標，一一達成目標。\n  \n  \n    捲起袖子下去實作是進步最快的方式\n不斷的練習可以幫助熟練，第一天也許比較痛苦，第二天第三天重複一樣的動作，就會慢慢漸入佳進，不斷的練習！！\n  \n  \n    早上起來固定看一些影片\n將原本會浪費時間的習慣用一些學習的習慣來替代，久而久之非常顯著。\n  \n  \n    快速的累積文章（以敏捷式開發代替完美主義）\n我之前想寫design pattern文章的方式太過要求，想做到面面俱到，但這樣做往往會在某些點鑽牛角尖。用敏捷式開發吧！先寫出一篇來，聽取大家的建議，或是自己覺得不好的地方再做修改！這樣會有效率的多。\n  \n  \n    擁抱限制\n常常因為效率不錯，就無限度的加長工作時間，卻沒想到沒有時間的限制下，動力會大大的降低。時間一長發現自己什麼都沒做到，於是只好再加長工作時間，惡性循環。給自己定下一個合理的工作時間吧！足夠學習，又不會令人喪失鬥志。如果再三小時內完成一個小功能是一個好玩的挑戰。若是覺得前三個小時效率不錯，那麼繼續工作9小時，是不是令人提不起勁呢？\n  \n\n\n回頭想想，如果我可以快速的學會一個東西，那我不就有很好的素材可以寫。如果我為了寫網誌而拖累了學習速度，那我不僅寫得文章數少，學到的東西又更加少。完全本末倒置。\n",
      categories: [],
      tags: ["Learning"],
      id: 3
    });
    
  
    idx.add({
      title: "CSS簡介",
      excerpt: "了解CSS運作方式的關鍵 想像每個HTML元素四周都有看不見得方框，使用Rules來改變呈現的方式。 CSS的運作方式 CSS associates style rules with html elements （CSS的運作方式是將HTML和Rules連結起來。） Rules rules包含兩個部分：selector與declaration。 Declaration Declaration包含了Property和Value。 CSS properties affect how elementts...",
      categories: ["Front-end"],
      tags: ["CSS"],
      id: 4
    });
    
  
    idx.add({
      title: "HTML額外標籤",
      excerpt: "因為學習HTML在一般的標籤上並沒有遇到什麼問題，所以就不多做說明。 直接進入比較容易混淆不理解的地方，就是HTML的額外標籤。 HTML的額外標示 一般常見的標籤，很容易理解，所以特別針對HTML的額外標示來加強需具備的Web知識。 1. DOCTYPE html經歷了不同版本，所以每個網頁一開始都應該告訴瀏覽器使用的html版本。 &lt;!DOCTYPE html&gt; 2. 註解 html裡的註解以表示 3. id屬性 a) 每個HTML屬性都可以使用id屬性，將某元素「獨立」辨識出來，也就是說它是唯一的。 b) 同一個頁面上的兩個元素不能有相同的id屬性，否則該值就不再唯一。 c) 學習javascript時，id屬性可以讓程式碼與特定元素互動。...",
      categories: ["Front-end"],
      tags: ["HTML"],
      id: 5
    });
    
  
    idx.add({
      title: "Algorithm - Dijkstra's Algorithm",
      excerpt: "資料結構 Q是一個以d值來做鍵值的Queue，取出時會從最小的d開始取，也就是取出距離最短的頂點V。 S是一個頂點的集合，用來存放從Q中刪除的頂點。 Dijkstra’s Algorithm DIJKSTRA(G,w,s) 1. INITIALIZE-SINGLE-SOURCE(G,s) 2. S = ∅ 3. Q = G.V 4. while Q ≠...",
      categories: [],
      tags: ["Algorithm"],
      id: 6
    });
    
  
    idx.add({
      title: "Algorithm - BFS(Breadth-first Search)(ch22.1 22.2)",
      excerpt: "Graph algorithm 符號說明 Graph用G=(V,E)來表示，V是Vertex的縮寫，也就是頂點。E是Edge的縮寫，也就是邊。理解V和E分別是頂點和邊之後，就不難理解Graph是由點和邊構成，所以表示成G=(V,E)。從頂點u到頂點v的一個邊則用(u,v)來表示。 表示Graph G=(V,E)有兩種方式，分別是adjacent matrix與adajecent list。比較常用adjacent list來表示graph，因為它花費的cose比較小。表示一個儲存Graph中鄰近u的所有頂點的adjacent list，用Adj[u]來表示。 Breadth-first Search(寬度優先搜尋) Minimum spanning tree中的Prim演算法和單一來源最短路徑問題中的dijkatra演算法都使用類似BFS的演算法的方法。BFS有系統的搜尋Graph G=(V,E)的邊來發現可以從Source(起始點，之後縮寫成S)到達的每個頂點。 BFS-Tree的建構 BFS-Tree : 產生一棵以S為根的BFS-Tree來包含所有可到達的頂點。...",
      categories: ["Algorithm"],
      tags: ["Algorithm"],
      id: 7
    });
    
  
    idx.add({
      title: "Algorithm - DFS(Depth-First Search)(ch22.3)",
      excerpt: "頂點的資料結構 DFS與BFS不同的是，在頂點上須標明兩個時間標籤(Timestamp，以頂點v為例子，就是v.d和v.f這兩個屬性。所以變成以下三個。 u.π - predecessor vertex. u.d - timestamp when the vertex is first discovered (and is subsequently colored gray)...",
      categories: [],
      tags: ["Algorithm"],
      id: 8
    });
    
  
    idx.add({
      title: "Algorithm - 最短路徑問題(ch24)",
      excerpt: "最短路徑問題(Shortest Path) 以下說明摘錄自Algorithm 「最短路徑」是由起點到終點、權重最小的路徑。 最短路徑問題包括下列幾種： Point-to-Point Shortest Path，點到點最短路徑： 給定起點、終點，求出起點到終點的最短路徑。一對一。 Single Source Shortest Paths，單源最短路徑： 給定起點，求出起點到圖上每一點的最短路徑。一對全。 All Pairs Shortest Paths，全點對最短路徑： 求出圖上所有兩點之間的最短路徑。全對全。 Relaxation（鬆弛）...",
      categories: [],
      tags: ["Algorithm"],
      id: 9
    });
    
  
    idx.add({
      title: "Algorithm - Bellman-Ford Algorithm(ch24.1)",
      excerpt: "BELLMAN-FORD Algorithm BELLMAN-FORD演算法是個很容易撰寫的演算法。而且他可以偵測負重量循環(negative weight cycle)。 BELLMAN-FORD(G,w,s) 1. INITIALIZE-SINGLE-SOURCE(G,s) 2. for i = 1 to |G.V|-1 3. for each edge (u,v)...",
      categories: [],
      tags: ["Algorithm"],
      id: 10
    });
    
  
    idx.add({
      title: "Algorithm - Heap sort",
      excerpt: "Heap heap可看作是幾乎完整的二元樹的陣列。 PARENT(i) return i/2 LEFT(i) return 2i RIGHT(i) return 2i+1 Max heap與Min heap Max heap最大的元素在根部 Min heap最小的元素在根部 heapsort用的是Max heap...",
      categories: [],
      tags: ["Algorithm"],
      id: 11
    });
    
  
    idx.add({
      title: "Algorithm - Merge sort(ch2.3)",
      excerpt: "#原理 每跑過一次merge-sort主程式都會把陣列分割成兩半。直到分成每個元素分離之後，再開始兩兩的排序並合併。合併到最後即為排序好的結果。 #程式碼說明 MERGE-SORT主程式負責分割陣列，等到分割到不能分割，也就是每個陣列剩下一個元素的時候，改由MERGE副程式兩兩進行合併，合併的時候加以排序，等到全部合併成一個陣列之後，剛好就排序完成了。 MERGE-SORT(A,p,r) 1 if p &lt; r 2 q = (p+r)/2 3 MERGE-SORT(A,p,q) 4 MERGE-SORT(A,q+1,r) 5 MERGE(A,p,q,r)...",
      categories: [],
      tags: ["Algorithm"],
      id: 12
    });
    
  
    idx.add({
      title: "Algorithm - Quick sort",
      excerpt: "概念 從數列中挑選一個pivot，大於pivot放在右邊，小於pivot放在左邊，重複循環最後得出的陣列即為排序結果。 流程 (請搭配虛擬碼的QUICKSORT主程式一起服用) 選擇陣列中的一個元素作為pivot 比pivot小的都移到pivot的左邊，比pivot大的都移到pivot的右邊。 對pivot左邊和右邊的兩個陣列分別再做一次QUICKSORT()，形成一個遞迴呼叫。 程式碼 QUICKSORT(A,p,r) 1 if p &lt; r 2 q = PARTITION(A,p,r) 3 QUICKSORT(A,p,q-1)...",
      categories: [],
      tags: ["Algorithm"],
      id: 13
    });
    
  
    idx.add({
      title: "Dynamic Programming cheatsheet",
      excerpt: "Problem 1:A manufacturing problem to find the fast way through a factory Problem 2:The matrix-chain multiplication problem Problem 3:LCS LCS程式實作...",
      categories: [],
      tags: ["Algorithm"],
      id: 14
    });
    
  
    idx.add({
      title: "Algorithm - 時間複雜度整理",
      excerpt: "以下資料摘自Ting的小筆記 ###Sorting Algorithms ###Graph Algorithms | | Graph algorithm 　 | 時間複雜度 | strategy | negative weight | | —-...",
      categories: [],
      tags: ["Algorithm"],
      id: 15
    });
    
  
    idx.add({
      title: "Algorithm - 3週不間斷學習演算法之心得",
      excerpt: "這個禮拜花了大量的時間研讀演算法，紀錄下學習過程與心得。 清點在這一週中學到了什麼 了解演算法所解決的問題(Problem) 了解各個演算法的解決問題策略與方式。 部分的演算法我能夠以Java來實現。 了解了足夠數量的演算法。 學習演算法的三個階段 看的懂演算法，並且能用真正的程式語言實現出來。 了解演算法，可以利用演算法的特性解決教科書以外的問題。 設計演算法，這部分需要進修另一門課 - 演算法設計。工作或研究上有需求才進修至此階段。 一般學習上到第二個階段就足夠了。也就是說有兩個大方向，一是實現演算法，二是以課本上的演算法為基礎學習其他的演算法。這樣一來就不難聯想，如果我要比別人有優勢，我要： 了解每個演算法所解決的問題。 熟練實現演算法的過程。 了解除了課本上基礎演算法的變形，讓演算法可以適用在更多的場景。 演算法會用到許多的資料結構，學習演算法的同時可以幫助了解資料結構的特性。 沒有學習過演算法的人可能需要花一些時間了解這個演算法怎麼使用，而我可以快速並且更正確的使用它，減少冤枉路。演算法的變形建立於某演算法的特性之上，因此學習演算法的變形可以更了解演算法的特性。 實現(implement)的方式 implement的方式以課本的為主比較好，等到實作出來了以後再看看別人怎麼寫，不然網路上的寫法其實非常多種，令人眼花撩亂，要找到一個符合自己口味的並不是太容易。幸運的找到了一個符合調性的blog也有可能作者用不同的寫法來寫，學習上並不特別效率。自己實作是比較理想的做法，訓練把自己的想法轉變為程式的能力。是個不錯的努力方向。...",
      categories: [],
      tags: ["Algorithm","Learning"],
      id: 16
    });
    
  
    idx.add({
      title: "Sublime 3 套件整理",
      excerpt: "學習網頁一直以來有個困擾，打括號真的是慢到不行，原來sublime這個文字編輯器有許多方便的套件可以用。用簡單的指令就可以架構出一個網站。 先安裝必備的套件管理工具 ConvertToUTF8 ： 解決 Sublime Text 3 預設不支援 Big5 與其他 CJK 編碼的問題 Emmet: 前端工程師必備的擴充套件 ( 參見 http://emmet.io 官網 )...",
      categories: [],
      tags: ["Sublime","Text Editor"],
      id: 17
    });
    
  
    idx.add({
      title: "Bootstrap 學習筆記",
      excerpt: "sublime的套件安裝與使用方式請看這裡 學習 Bootstrap 的幾個重點 學會使用grid system切版。 找相似的範例來練習版面。 練習熟練到可以直接打指令叫出想要的元件。 懂得微調成自己想要的。 了解如何傳值給後端(selector)。 多練習各種不同的版面 儲存成gist 最後練習 build 各種版面來熟練 bootstrap。 學習原則：相同的東西、學一遍就好，然後一個目標一個目標去扎實的達成，相信是最快的方式。 所以直接從3開始學習，看的是 學習資源 Bootstrap...",
      categories: [],
      tags: ["Bootstrap","HTML"],
      id: 18
    });
    
  
    idx.add({
      title: "Meteor專用的Sublime套件：TernJs",
      excerpt: "終於安裝好這個Sublime套件了，安裝上有點麻煩，步驟很多，每次用的時候都要設定一下才能用。不過裝好之後爽度還是挺高的 demo影片 github 簡單記錄一下安裝過程 從finder開啟~/Library/Application Support/Sublime Text 3/Packages資料夾 把github上的meteor.js丟進這個資料夾中的TernJS/ternjs/plugin，如果沒有這三個資料夾，就創一個。 打開sublime &gt; project &gt; save project as &gt; 儲存project sublime &gt;...",
      categories: [],
      tags: ["Sublime","Text Editor"],
      id: 19
    });
    
  
    idx.add({
      title: "Javascript Roadtrip 3 Closure",
      excerpt: "這一章講的是closure，很奇妙的東西。 JavaScript学习总结(十六)——Javascript闭包（Closure） 這個網站寫的不錯，看來以後要拜讀一下他的文章。 2.1 影片 ￼￼function buildCoveTicketMaker( transport ) { return function ( name ) { alert(\"Here is your transportation...",
      categories: ["Front-end"],
      tags: ["javascript"],
      id: 20
    });
    
  
    idx.add({
      title: "CSS Dinner - 好玩又有效的 CSS 教學",
      excerpt: "CSS Dinner CSS Diner 是一個很有趣的小遊戲，你必須使用css來選取桌上扭動的物體， 全部26關玩完對 CSS selector 想忘也忘不了。 css selector 在 javascript 或是 jQeury 也會用到，不熟的話到時候還是需要花額外的時間加強。 有神人整理成一系列好玩練習效果又顯著的教學，好教學不玩嘛？XD 學習目標 Univeral, Type...",
      categories: ["Front-end"],
      tags: ["CSS"],
      id: 21
    });
    
  
    idx.add({
      title: "Discover meteor Ch4：Collection",
      excerpt: "Collection 新增一個collection collections/posts.js Posts = new Meteor.Collection('posts'); 除了client與server以外的資料夾會在兩者都執行。 所以Posts collection在client和server都可以使用。 這裡的Posts前面不加var，這樣整個app都可以存取到Posts。 git commit -m \"Added a posts collection\" Collection的性質 On...",
      categories: [],
      tags: ["Meteor","javascript"],
      id: 22
    });
    
  
    idx.add({
      title: "Discover Meteor Ch5：Routing",
      excerpt: "現在要做的事情是點選http://myapp.com/posts/post_id，就可以對應到post的網頁。 加入iron router這個package。 $ mrt add iron-router 知識補充站 Iron Router Not only does it help with routing (setting up paths),...",
      categories: [],
      tags: ["Meteor","javascript"],
      id: 23
    });
    
  
    idx.add({
      title: "星期三搞定一週 88% 工作",
      excerpt: "Part 1:工作清單以一週為規劃 優點 不需要每天製工作清單，可以節省時間精力。 一年原本365份的工作清單，縮減成52份。 有足足一週可以進行最終的彙整工作，消除「工作未完成」的心理壓力。 可嚴選真正重要的工作：一天的工作量僅為一週的七分之一，審視一週所有的工作，較易依工作重要性決定優先次序。 提昇完成工作的成就感，比幾每天完成小部分工作，一週完成一項中大型工作可獲得較高的成就感。 Part2:一週只有三天，以星期三為最後期限 為工作添加一些限制，像是「一週只有三天」，「星期三是最後的截止期限」這樣絕對可以讓自己以驚人的高效率、迅速完成工作。 因為把工作集中在一個禮拜的前三天完成，這樣高密度的工作下，在經驗中反覆學習改進，自然可以養成高效率、高集中力的工作能力。（p39分析了禮拜中的每一天可能的心態，最後選擇了星期三當做最後期限。） 加班只能星期三 有些企業會將每月或每週的某天，規定為「不得加班的一天」。有「每週有一天絕對不加班」的自我約束，對於減少拖拖拉拉而加班可是相當的有效。 松本幸夫提出的理論是「除了星期三外，一律不加班」才是最佳方式。這個理論應是針對工作上的事務，限制自己一定要在上班時間處理完。這樣下班時間就可以享受、或是學習自己所需要的技能。 如果工作量太大無法實行只有星期三加班，那可以改成實行「每個禮拜的星期四不加班」的方式來解決。 星期三絕對不能延期 在瞬息萬變的時代，若是要求「所有的工作都不得延期」，如此嚴苛的條件相信大家看到都冷汗直流吧。因此在逼不得已的情況下，將工作延期，重新規劃也無訪。但是唯獨在決戰之日星期三這天，就算眼前工作堆積如山，也要以「馬上動手做」取代延期。只要決戰星期三能安然度過，接著就可以以無比輕鬆的心情迎接星期四、星期五和週末。 如何精簡星期三的工作 了解80%即可宣告大功告成的工作 工作並不需要都已100%完成為目標，有些情況下只要完成80%即可宣告大功告成，將時間精力留給其他工作。...",
      categories: [],
      tags: [],
      id: 24
    });
    
  
    idx.add({
      title: "Sitcon workshop：Git 入門到進階與實務經驗談",
      excerpt: "Git 入門到進階與實務經驗談 workshop網頁 sitcon這次舉辦的為期五天的workshop 每天不一樣的主題，我參加的有 8/11 Git 入門到進階與實務經驗談 8/14 那些學校沒教的黑魔法攻防 8/15 學習設計：從一個網站的設計開始 這是第一天 Git workshop 的學習筆記 主講人:Denny 投影片: 連結 第零部分：前置設定...",
      categories: [],
      tags: ["Git"],
      id: 25
    });
    
  
    idx.add({
      title: "jQuery Return Flight Ch1 ( 1 )：Ajax Basics",
      excerpt: "這是之前在try jQuery做過的例子。 之前我們只能顯示localhost的圖片，現在我們要從server載圖片下來，並顯示之。 接下來來完成我們第一個Ajax程式。 $('.confirmation').on('click', 'button', function(){ $.ajax('http://example.org/confirmation.html', { success: function(response) { $('.ticket').html(response).slideDown(); } }); }); 使用Ajax回傳的網頁並不是完整的網頁，而是只有局部更新。 &lt;div&gt; ... &lt;strong&gt;Boarding...",
      categories: [],
      tags: ["Ajax","javascript","jQuery"],
      id: 26
    });
    
  
    idx.add({
      title: "Ruby bits ( 1 ) : Expression",
      excerpt: "Unless Unless is more intuitive 用 unless 代替 if! 更加直覺 Unless with else is confusing unless 和 else 一起用的時候令人困惑 NIL...",
      categories: [],
      tags: ["Ruby","Ruby Bit"],
      id: 27
    });
    
  
    idx.add({
      title: "Ruby bits ( 2 ) : Methods and Classes",
      excerpt: "Hash Argument 每一個不同的欄位就多一個 argument不是個好方法，會造成很多欄位空在那邊。 用 Hash argument 來解決這個問題。 使用方法，因為 hash 是由 key-value 所組成，所以可以把需要的屬性設成 symbol ，也就是:lat這種樣子。後面指定它的 value，形成 key-value 的形式。 改寫成 1.9...",
      categories: [],
      tags: ["Ruby","Ruby Bit"],
      id: 28
    });
    
  
    idx.add({
      title: "Ruby bits ( 3 )：Class",
      excerpt: "上一個禮拜想要嘗試更多的動手記憶，經過實驗證明，還是需要筆記的輔助反覆記憶會比較好。經過這次的練習之後會更注重學習本身的強度。 ENCAPSULATION封裝 跟物件本身有關的method，使用class會比使用許多的method來的好。 VISIBILITY 有一些method你並不想給外面的人直接使用他，那麼宣告成private，限制這些private method不能給外面的人所使用。 class User def up_vote(friend) bump_karma friend.bump_karma end protected def bump_karma puts \"karma up for...",
      categories: [],
      tags: ["Ruby","Ruby Bit"],
      id: 29
    });
    
  
    idx.add({
      title: "Ruby bits ( 4 )：ActiveSupport",
      excerpt: "install it and load it install it gem install activesupport gem install i18n load it require ‘active_support/all’ core extensions: array...",
      categories: [],
      tags: ["Ruby","Ruby Bit"],
      id: 30
    });
    
  
    idx.add({
      title: "Ruby bits ( 5 )：Modules",
      excerpt: "Ruby bits的課程真的很不錯，講到的主題都是很重要的東西。有點相見恨晚的感覺，趕快把它做完吧! 本節學習目標 module activesupport ::Concern 了解self的意義 part1: module class method與instance method use extend to expose methods as class method...",
      categories: [],
      tags: ["Ruby","Ruby Bit"],
      id: 31
    });
    
  
    idx.add({
      title: "Ruby bits ( 6 )：Blocks 學習筆記",
      excerpt: "不得不再說一次，這些主題都超級重要，不先學Ruby直接學Rails感覺很卡。果然要從基礎開始打才是王道。在看這篇之前請先看完method / block / yield / Proc / lambda，很多觀念都是從這邊的延伸。 conventions block有兩種表達方式 single block braces if the block is a single...",
      categories: [],
      tags: ["Ruby","Ruby Bit"],
      id: 32
    });
    
  
    idx.add({
      title: "Ruby bits 2 ( 1 )：BLOCKS, PROCS & LAMBDAS",
      excerpt: "雖然跟Ruby bit名字很像，但是內容的確比較進階點。 two ways for storing blocks 1.Proc my_proc = Proc.new do puts \"tweet\" end my_proc.call # =&gt; tweet 等同於...",
      categories: [],
      tags: ["Ruby","Ruby Bit"],
      id: 33
    });
    
  
    idx.add({
      title: "EDX Linux Foundation Ch 8：Filesystem",
      excerpt: "File system Mount File system table If you want it to be automatically available every time the system starts up,...",
      categories: [],
      tags: ["Linux","EDX Linux Foundation"],
      id: 34
    });
    
  
    idx.add({
      title: "EDX Linux Foundation Ch 9：User Environment Section 1 Account",
      excerpt: "Section 1 Account 1. Identifying the Current User who To list the currently logged-on users, type who whoami To identify...",
      categories: [],
      tags: ["Linux","EDX Linux Foundation"],
      id: 35
    });
    
  
    idx.add({
      title: "EDX Linux Foundation Ch 9：User Environment Section 2 Environment Variables",
      excerpt: "##Environment Variables Environment variables are simply named quantities that have specific values and are understood by the command shell, such...",
      categories: [],
      tags: ["Linux","EDX Linux Foundation"],
      id: 36
    });
    
  
    idx.add({
      title: "EDX Linux Foundation Ch 9：User Environment Section 3 and 4",
      excerpt: "Section 3:Recalling Previous Commands Up and Down you can recall previously used commands simply by using the Up and Down...",
      categories: [],
      tags: ["Linux","EDX Linux Foundation"],
      id: 37
    });
    
  
    idx.add({
      title: "EDX Linux Foundation Ch 9：User Environment Section 5 File Permissions",
      excerpt: "File Ownership 0.File Permission Modes rwx: rwx: rwx u: g: o rwx Files have three kinds of permissions: read (r),...",
      categories: [],
      tags: ["Linux","EDX Linux Foundation"],
      id: 38
    });
    
  
    idx.add({
      title: "EDX Linux Foundation Ch10：Text Editor",
      excerpt: "本週比較輕鬆，介紹的是Text Editor，但是我卻從中得到很多收穫。課程中介紹了Vim和Emacs，話說這是我第一次聽到Emacs這個編輯器，但他卻是原生的linux編輯器。而且還有不少的愛用者，開發效率也不輸Vim！ ( 以下內容大部分由Carl大哥所分享，加上我的心得所寫而成。 ) Vim VIM Adventures http://vim-adventures.com/ 初學Vim的好遊戲，強迫你要用Vim指令來解謎破關XD Vim 正體中文社團 https://www.facebook.com/groups/vim.tw/ 有很多的Vim資源、套件。 Best Vim Tips http://vim.wikia.com/wiki/Best_Vim_Tips Vimgenius http://www.vimgenius.com/...",
      categories: [],
      tags: ["Linux","EDX Linux Foundation"],
      id: 39
    });
    
  
    idx.add({
      title: "Vim 學習筆記",
      excerpt: "常用指令筆記 第一課： 使用hjkl控制上下左右 第二課： 使用w e b跳躍單字 第三課： 使用dd剪下一行，並使用p或P貼上。 第三課：移動 跳至某一行 :第幾行 跳至段落{或} 跳至句首$ 跳至句尾0 跳至某行： 第四課：畫面捲動 page down: page...",
      categories: [],
      tags: ["Vim"],
      id: 40
    });
    
  
    idx.add({
      title: "Agile Meetup 2014 9月：More with LeSS",
      excerpt: "這是第三次參加agile meetup，真的很感謝scrum community舉辦這麼這麼有優質又免費的活動。 今天的主題LeSS在講的是Large-Scale Scrum，也就是大型的scrum組織如何協同合作。 每一個小team都要正確的執行scrum，否則team的數量一多更容易崩壞。 今天提到的scrum原則 每個團隊成員都有責任管理自己 scaling itegration 每個人都不斷的提交(commit)，一天提交2~5次是不夠的，最好可以每小時都commit。 在backlog中刪除不必要的功能 resource pool是不可行的方式 resource pool指的是誰有空誰就被抓去組成一個團隊來處理新的專案，因為每次成立新的團隊就要一段磨和期，無形間浪費了很多的產能。一個scrum team組成三年以上都有可能再度成長。 feature team與component team...",
      categories: [],
      tags: ["Agile"],
      id: 41
    });
    
  
    idx.add({
      title: "Agile Meetup 2014 9月：喚醒者的工具箱",
      excerpt: "Part1:當一個好的教練！ 如何讓一個二十幾年沒運動的阿宅學會打球 一個網球教練如何讓一個二十幾年沒出門運動的宅女學會打球，答案是沒有太多的技巧，沒有標準的動作，當場示範怎麼打網球，然後把球丟給那個宅宅，阿宅揮空幾次以後，發現真的打的到了！證明學習的最好方法不是看書，而是用本能來適應。 Try error 嘗試錯誤 人類的腦子分為兩個部分，其中腦幹會想保護自己。 先讓人專注之後，保護自己的機制就會降低 一旦降低了自己的恐懼感，便增加awareness。 learning the hard way 自己跌倒才會學到 Part2:營銷 訊息爆炸的時代如何讓別人知道自己的產品，關鍵是這事情是否令人所印象深刻（markable），製造一些話題，會有不錯的效果（紫牛效應）。 一個例子-雕爺牛楠 找美食家來試吃，每個月淘汰兩道菜，增加兩道菜，製造話題 1.理解鐵桿粉絲真正想要需要什麼 2.墨守成歸是風險最大的作法...",
      categories: [],
      tags: ["Agile"],
      id: 42
    });
    
  
    idx.add({
      title: "EDX Linux Foundation Ch11：Local Security Principle section 1~3",
      excerpt: "Section 1 Understanding Linux Security 使用者權限的管理在個人電腦上可以放輕鬆使用，但如果是多人共用的電腦，就必須限制的嚴格，最好只給用戶他所可以用的權限就好，不要多給，本章將會以最嚴格的標準來說明如何管理使用者的權限以增加安全性。 User Accounts For each user, the following seven fields are maintained in the /etc/passwd...",
      categories: [],
      tags: ["Linux","EDX Linux Foundation"],
      id: 43
    });
    
  
    idx.add({
      title: "EDX Linux Foundation Ch11：Local Security Principle section 4~5",
      excerpt: "Section 4: Working with passwords How Passwords are Stored On modern systems, passwords are actually stored in an encrypted format...",
      categories: [],
      tags: ["Linux","EDX Linux Foundation"],
      id: 44
    });
    
  
    idx.add({
      title: "Personal Kanban：能夠用在自己身上的敏捷方法 學習筆記",
      excerpt: "如何將敏捷方法用在個人身上? 符合敏捷精神 Agile 因為Scrum需要角色的區分，所以對個人來說，並不需要使用Scrum，只要符合敏捷精神即可。 「個人看板系統」Personal Kanban 偶然發現這個真的是太酷了，一直在尋找可以管理自己的敏捷方法。在今天終於找到了答案。Personal Kanban可以讓自己看見自己的問題。看到自己問題之後便能夠做出調整，持續改善，增加產能。這也是敏捷方法的精神，透過敏捷方法改善單位時間的產能，避免低效率的加班，如此一來有更多的時間休息、散心，有更多的時間學習新的知識，形成正向循環。 實行Personal Kanban三步驟 visualize(視覺化)：把你手頭的工作用流程畫出來 Limit Work-in-progress（限制WIP)：依據利特爾調整進行中工作的數量。 Manage flow（管理工作流)：透過反省、分析最佳化你的工作，這是最有價值的部分。 步驟1: 視覺化 把手頭上的工作畫成你的第一個看板。 因為看的到所以知道 我漏了什麼？...",
      categories: [],
      tags: ["Agile","Kanban"],
      id: 45
    });
    
  
    idx.add({
      title: "EDX Linux Foundation Ch12：Network",
      excerpt: "IP and package IP(Internet Protocol) address is essential for routing packets of information through the network.These packets contain data buffers...",
      categories: [],
      tags: ["Linux","EDX Linux Foundation"],
      id: 46
    });
    
  
    idx.add({
      title: "EDX Linux Foundation 補充筆記",
      excerpt: "七層筆記＋tcp/ip筆記 ip mac socket 基本知識 乙太網路 了解封包內容 名詞釐清 IEEE 國際上專業制定單位的組織 LAN (LOCAL AREA NETWORK) 區域網路 WAN (WIDE AREA NETWORK) 廣域網路...",
      categories: [],
      tags: ["Linux","EDX Linux Foundation"],
      id: 47
    });
    
  
    idx.add({
      title: "Techdays Videos 釋出",
      excerpt: "門票要價15000的techday影片釋出了 蒐集了幾個比較有興趣的影片，分別是: 保哥的 使用 TypeScript 開發大型應用程式 幾個敏捷開發的經驗分享: Kanban 看板及 Lean 精實的技巧在大型軟體開發專案 現代化網站開發技巧應用實例 Modern Web Development Practices 從版本管控到持續整合 (Continuous Integration, CI)...",
      categories: [],
      tags: ["Agile","Kanban","CI/CD"],
      id: 48
    });
    
  
    idx.add({
      title: "Sinatra 初體驗(1) - Route",
      excerpt: "First Sinatra App 輸入gem install sinatra安裝gem 建立app.rb檔 require \"sinatra/base\" class App &lt; Sinatra::Base get '/' do \"Hello World!!\" end end...",
      categories: [],
      tags: ["Ruby","Sinatra"],
      id: 49
    });
    
  
    idx.add({
      title: "Sinatra 初體驗(2) template與layout",
      excerpt: "第一次使用Sinatra，還滿好玩的。 只要輸入gem install sinatra安裝 之後在ruby檔中require \"sinatra/base\"就可以使用了 each_with_index 原來要使用each_with_index來取出index，我還在想說沒有i怎麼用＠＠ &lt;% @images.each_with_index do |image, index| %&gt; &lt;h2&gt;&lt;a href=\"/images/&lt;%= index %&gt;\"&gt;&lt;%= image[:title] %&gt;&lt;/a&gt;&lt;/h2&gt;...",
      categories: [],
      tags: [],
      id: 50
    });
    
  
    idx.add({
      title: "jQuery Return Flight Ch1 ( 2 )：補充筆記",
      excerpt: "使用.html()插入元素 要使用的ajax長這樣，點下#tour之下的button後，如果出現錯誤，就會顯示錯誤訊息。 $(document).ready(function() { var el = $(\"#tour\"); el.on(\"click\", \"button\", function() { $.ajax('/photos.html', { data: {location: el.data('location')}, success: function(response) {...",
      categories: [],
      tags: ["jQuery","javascript"],
      id: 51
    });
    
  
    idx.add({
      title: "jQuery Returm Flight Ch2：Javascript Object & Function",
      excerpt: "Part 1. javascript Object 將改原本的程式重構，所有的function都變成Object的Method，增加可讀性。 這是原本的code var confirmation = { init: function() { $('.confirmation').on('click', 'button', function() { $.ajax('confirmation.html', { ......",
      categories: [],
      tags: ["jQuery","javascript"],
      id: 52
    });
    
  
    idx.add({
      title: "EDX Linux Foundation Ch13 Manipulating Text",
      excerpt: "Section 1 cat and echo cat(concatenate) cat file 顯示檔案，按空白鍵可以捲動 cat file1 file2 把file1和file2接起來顯示 cat file1 file2 &gt; newfile 把file1和file2接起來並且存成newfile。 cat...",
      categories: [],
      tags: ["Linux","EDX Linux Foundation"],
      id: 53
    });
    
  
    idx.add({
      title: "jQuery Return Flight Ch4：Utility Methods",
      excerpt: "each 用each把result的物件讀出來，插入頁面元素之中。 要插入&lt;p&gt;&lt;/p&gt;之中使用的是html() 要插入img的src欄位，使用find('img').attr('src', city.image) 之前也有使用過attr()這個方法來找到data欄位。 success: function(result){ $.each(result, function(index, city) { var favorite = $('.favorite-'+index); favorite.find('p').html(city.name); favorite.find('img') .attr('src', city.image);...",
      categories: [],
      tags: ["jQuery","javascript"],
      id: 54
    });
    
  
    idx.add({
      title: "jQuery Return Flight Ch5 ( 1 )：Advanced Event",
      excerpt: "advanced event handler trigger 使用trigger就像是你按下那個按鈕。範例: function picture() { console.log('Show Plane'); } function status() { console.log('In Service'); } function zoom() {...",
      categories: [],
      tags: ["jQuery","javascript"],
      id: 55
    });
    
  
    idx.add({
      title: "EDX Linux Foundation Ch15：Shell Script ( Ch14跳過 )",
      excerpt: "這是參加開源社群Tossug Linux讀書會的心得筆記，部分內容經過大大的補充，讓學習上更完整:） Ch14講的是Printer，因為實際使用上較多Bug所以跳過這一章節，等有需要的時候再來學習。 Shell linux系統可分為三個重要的部份： 1.kernel 2.shell 3.application 因為kernel的部份太過低階，所以需要透過一個友善介面(interface)來讓使用者操作的時候更為方便，這個介面便是shell。涵蓋範圍包括但不限於： CLI (Command line interface) GUI (Graphical user interface) 常見的CLI有以下幾種。 sh是最古老的shell，大部分的linux系統使用上sh時，會直接使用其他shell的對應功能來取代，所以使用時需特別注意，就算語法是sh，其實實際上運作的是bash或者其他的shell如zsh…等等。 csh...",
      categories: [],
      tags: ["Linux","EDX Linux Foundation"],
      id: 56
    });
    
  
    idx.add({
      title: "Atom 防止 Snippet Package 更新",
      excerpt: "使用 Snippet 最重要的針對自己的習慣客製化快捷鍵。 Atom 有許多內建的 Snippet，建議「不要」使用，因為那些設定會存在「Atom 程式」裡面，無法儲存在 .atom 資料夾中。所以一旦 Atom 版本更新之後，全部的設定都會不見。如果要使用 Snippet 請使用 Package 安裝，這樣用 git 來控管 .atom 資料夾時，就不會發生意外，全部的修改都能由 git...",
      categories: [],
      tags: ["Atom","Text Editor"],
      id: 57
    });
    
  
    idx.add({
      title: "Rails Project 1 URL Shortener",
      excerpt: "前言 接下來我要藉由實作一些比較小型的Rails Project，來練習工程師必備的技能，其中最主要訓練的目標是能抓出需要實作的use case與如何從use case中實踐功能。因為沒有網頁的相關背景，如何磨練Html css javascript的基本實作能力也是這一階段的重點。 熟悉了如何使用Rails完成所要的需求與一些常見功能的開發之後，下一階段可以是學習Rails如何跟API互動或是開始學習Design Patterns。學習Dessign Pattern的原因有：一是可以讀的懂程式碼，二是了解為什麼要這麼寫。anyway，先把眼前的事情做好最重要let’s do it！ Use Case , Page Flow and Data 在練習實作Project的過程中，我會格外地注意Use...",
      categories: [],
      tags: ["Rails"],
      id: 58
    });
    
  
    idx.add({
      title: "Atom 常用快速鍵",
      excerpt: "Sublime 快速鍵 Sublime有的快速鍵Atom幾乎都有，以下是我有在使用的一些快速鍵。 基本的移動與選取 游標移至行頭/行尾 cmd + 左 / 右 跳到頁首頁尾 cmd + 上 或 下 游標移至上個單字 / 下個單字 option...",
      categories: [],
      tags: ["Atom","Text Editor"],
      id: 59
    });
    
  
    idx.add({
      title: "Rails note : Require Creator",
      excerpt: "增加一個叫做Creator的別名，讓我們在判別作者時文意更加通順。 設定發文者 我們透過foreign key新增一個叫做creator的別名。作法是修改model/post.rb原本的 belongs_to :user 改成 belongs_to :creator, foreign_key: \"user_id\", class: \"User\" 原本我們要使用post.user來取得文章作者，現在可以使用post.creator來取得作者。 只有作者可以新增或修改文章 到posts controller加上before_action :require_creator, only: [:edit,...",
      categories: [],
      tags: ["Rails"],
      id: 60
    });
    
  
    idx.add({
      title: "Rails - 拆解 Form Helper 以 Checkbox 為例",
      excerpt: "使用Rails Form Helper時，很重要的一點是要知道Form Helper會產生什麼樣的Html Code，了解之，觀察之，這樣你才能修改成自己需要的樣子。如果要在form中加入check box，可以使用collection_check_boxes這個在rails 4新加入的form helper來完成。我們就以checkbox為例，來練習觀察html吧！ Collection Check Box 第一個來使用到的是collection_check_boxes，完整的參數是collection_check_boxes(object, method, collection, value_method, text_method, options = {}, html_options...",
      categories: [],
      tags: ["Rails"],
      id: 61
    });
    
  
    idx.add({
      title: "Atom 套件整理",
      excerpt: "atom-color-highlight 在編輯器中即時顯示色碼對應的顏色。 atom-development-server 一個很強大的東西，自己玩玩看吧。 atom-html-preview 老實說我不太會用這個套件，但是很多人下載，我就跟著下載了＠＠ autocomplete-plus 可以即時提示可用snippet或是路徑的套件。 autocomplete-snippets 搭配autocomplete-plus可以提示套件內的內容。懶人可以多多使用，爽度很高。 bootstrap3-snippets 我所使用的bootstrap3-snippet color-picker 顏色選擇器 docblockr 很好用的加強comment的套件，在block comment中按下enter就會自動多加個星號。很方便。建立block comment的快捷鍵是/**加上tab。 emmet 這就不用多做介紹了，網頁工程師必裝套件，如果不太清楚的話請google一下有很多介紹的好文。值得注意的是我會將預設的tab鍵改成慣用的按鍵，以免與snipppet相衝。...",
      categories: [],
      tags: ["Atom","Text Editor"],
      id: 62
    });
    
  
    idx.add({
      title: "排版練習1：PSD to HTML Porfolio",
      excerpt: "最近在訓練排版的熟練度，要快速打造protype基本的前端技能是必須的。我選擇的教材是tuts的psd to html porfolio。課程中介紹了詳細的切版流程，從切圖到建構html到用css排版都有詳細的介紹。本篇是psd to html也就是排版練習第一篇，練習的是使用純css來刻網站。接下來會練習更多題目，直到我掌握基本的排版技巧為止。 photoshop基本操作 psd to html 顧名思義就是把設計師做好的 photoshop 檔案，用 html 和 css 刻成網頁。這個練習很棒的地方就是模擬了一個設計師跟你合作。所以首先你的電腦裡需要安裝photoshop。我使用的是photoshop cc 2014版本。 測量元素距離...",
      categories: [],
      tags: ["HTML","CSS","PSD to HTML"],
      id: 63
    });
    
  
    idx.add({
      title: "排版練習2：PSD to html with Bootstrap",
      excerpt: "第二個練習一樣學習tuts的課程，選擇課程的好處是做到一半不知道該怎麼做時，有video解答可以看。看看高手怎麼做總是比自己亂弄的好的多。我選擇的課程是需要付費的，tuts還有一些免費的教材可以學習，影片或是文章教學都有，有興趣的自己發掘囉。第二個練習跟第一個練習不同之處在於本練習會使用bootstrap的grid system來排版，並且icon與logo會使用sprite css的方式來製作。 Sprite sheets sprite 說的是利用將 icon 集中在一張圖片上，藉由CSS設定不同顯示區域，來實現每一個不同的icon。這樣的好處是很可降低圖片request數，減少server負擔。現在我們要使用sprite的方法實作的是右上角的五個social-icon和左上角的mumbo logo。 Create Sprite Sheets 首先在photoshop中用方框工具圈選5個icon 點選file &gt; copy merge複製五個icon file &gt;...",
      categories: [],
      tags: ["HTML","PSD to HTML","Bootstrap"],
      id: 64
    });
    
  
    idx.add({
      title: "保哥 javascript 實戰課程筆記",
      excerpt: "javascript 語言特性 javascript是個動態型別語言，無法在開發期間宣告型別，意味著javascript的單一變數可能會隨時改變型別! javascript是個弱型別的語言：意味著在開發時期無法指定javascript型別。只能在執行期間檢查型別。如果真的要知道這個變數的型態，只能在執行時透過typeof的方式將該變數目前的型別使用字串顯示。 javascript是個物件導向程式語言，除了五種 primitive type 以外其他都是物件。這部份會在下一節詳細的說明。 javascript 是個物件導向程式語言 這節會從javascript是物件導向語言這個觀點延伸了解javascript的型別(type)。 除了數值(number) 字串(string) 布林(boolean) null undefined 這五個是原始型別(Primitive Type)外，所有的東西都是物件。 (引用自Are You...",
      categories: [],
      tags: ["javascript","Course"],
      id: 65
    });
    
  
    idx.add({
      title: "Ajax 學習筆記",
      excerpt: "ajax 如何運作？ Ajax 立基於非同步 JavaScript 和 XML。簡單地說，Ajax 即運用非標準的XMLHttpRequest物件，並配合伺服器端的 Script 進行通訊。 Ajax 能夠傳送並接收各種格式的資訊，其中包括 XML、HTML 和 text 檔案。 Ajax 最吸引人之處在於它的〝非同步〞性質，這意味著 Ajax 能做各種動作，而無須更新整個頁面。如此便能透過使用者的事件更新頁面的一小部分。...",
      categories: [],
      tags: ["Ajax","javascript"],
      id: 66
    });
    
  
    idx.add({
      title: "javascript核心筆記：Object",
      excerpt: "在 JavaScript 中，物件是 Object 的實例。你可以如下建立一個新的物件： var obj = new Object(); 實際上，現在已經很少人這麼撰寫了，使用物件實字（Object literal）語法就可以建立一個物件： var obj = {}; 上面你所看到的函式撰寫方式，稱之為函式實字（Function literal），這就像你寫下一個數值實字、物件實字或陣列實字，會產生數值或物件等： 搜尋物件上的特性 想要知道物件上有哪些自定義特性，可以使用...",
      categories: [],
      tags: ["javascript"],
      id: 67
    });
    
  
    idx.add({
      title: "Javascript核心筆記：this",
      excerpt: "call可以讓你決定this的參考對象 在 JavaScript 中，函式是 Function 的實例，Function 都會有個 call 方法，可以讓你決定 this 的參考對象。舉例來說，你可以如下呼叫： function toString(){ return '[' + this.name + ',' +...",
      categories: [],
      tags: ["javascript"],
      id: 68
    });
    
  
    idx.add({
      title: "Javascript核心筆記：callback",
      excerpt: "callback是一種設計模式 來看看callback的定義： Callback (computer programming) - Wikipedia In computer programming, a callback is a reference to a piece of executable...",
      categories: [],
      tags: ["javascript"],
      id: 69
    });
    
  
    idx.add({
      title: "Javascript核心筆記：function ",
      excerpt: "javascript的函數是一級物件(First-Class) function是由Function的實例，並且在javascript中可以指定給變數，函式與數值的地位相同，並不會像有些語言中，無法像數值一樣地被指定，不會淪為二等公民，因此，對於支持函式可如數值一樣指定給變數的語言，我們稱函式在這個語言中是一級函數。 var number = 10; // Number literal var obj = {x : 10}; // Object literal var array...",
      categories: [],
      tags: ["javascript"],
      id: 70
    });
    
  
    idx.add({
      title: "Javascript核心筆記：scope ",
      excerpt: "Scope 每個function在呼叫時都會建立新的 Function execution context，有個物件用來代表 Execution context，而區域變數則是 context 物件上的特性。 JavaScript 在查找變數時，會先在目前 context 物件上找，若找不到指定名稱，則會到外層 context 物件上找，若找不到，就再到更外層 context 物件找，直到全域物件為止，這樣的順序形成變數查找的 Scope chain。 closure是典型應用scope...",
      categories: [],
      tags: ["javascript"],
      id: 71
    });
    
  
    idx.add({
      title: "Javascript核心筆記：建構式與prototype",
      excerpt: "建立物件時，實際上做了什麼事? 使用 new 關鍵字時，JavaScript 會先建立一個空物件，接著設定物件的原型為函式的 prototype 特性所參考的物件，然後呼叫建構式並將所建立的空物件設為 this。接下來依照建構式設定實例上的特性，最後再由prototype補上未設定的特性。 建構式如何初始化實例 var p1 = new Person('Justin', 35); var p2 = new Person('Monica',...",
      categories: [],
      tags: ["javascript"],
      id: 72
    });
    
  
    idx.add({
      title: "Javascript核心筆記：namespace",
      excerpt: "靜態命名空間 方法1 - 直接指定 var myApp = {} myApp.id = 0; myApp.next = function() { return myApp.id++; } myApp.reset =...",
      categories: [],
      tags: ["javascript"],
      id: 73
    });
    
  
    idx.add({
      title: "Typescript是新手的好朋友",
      excerpt: "為什麼 Typescript 是新手的好朋友 typescript百分之百跟javascript相容，所有javascript的語法都可以在.tstypescript檔案中執行。因此就算是要javascrtip新手，也可以享受typescript帶來好處。typescript能夠讓 目前暫時不需要去研究typescript的其他功能，只需要他可以宣告型態，靜態語言即時偵錯，與關連定義檔就可以檢查method，光是這幾項就很值得使用了 需要注意的是因為typescript的許多特性，例如: class, module, interface 皆與原生javascript有所不同，如果對javascript還不了解，直接學習可能會更加的混淆。 在javascript演進這麼快速的現在，要選擇任何一種framework或是語言都是一種巨大的投資， 選擇 Typescript 還有什麼好處？ 因為javascript的是個動態型別的語言，所以只能在執行時期偵錯，要真的執行到那一行，才會跳出錯誤訊息，這使的偵錯上非常的不容易。 typescript所能解決的問題：因為typescript提供了靜態型別檢查，在編譯的時候就可以檢查到！尤其是打錯字的問題和型別不一致的問題。 typescript新增了一些型別，讓我們可以宣告靜態型別。也保留了原本動態型別的特性，只要你設為any！。 function 也可以使用冒號設定回傳值。 module...",
      categories: [],
      tags: ["javascript","Typescript"],
      id: 74
    });
    
  
    idx.add({
      title: "細讀 Bootstrap 3 文件",
      excerpt: "使用Bootstrap好一段時間了，卻沒有好好的把官方文件讀過一遍，雖然寫的出來但是速度不盡理想，所以這兩天花些時間將幾個不太理解的常用元件與一些以前有使用到卻不太了解的data-attribute用法寫下筆記，好提高生產力。 Part 1: Navbar 這是一個bootstrap官網上的完整navbar範例。 &lt;nav class=\"navbar navbar-default|navbar-inverse\"&gt; &lt;div class=\"container-fluid\"&gt; &lt;!-- Brand and toggle get grouped for better mobile display...",
      categories: [],
      tags: ["Bootstrap"],
      id: 75
    });
    
  
    idx.add({
      title: "SASS 的 @import @mixin @content @extend 與 @function",
      excerpt: "1.Import SASS在檔名前面加上底線時，不會直接編譯成CSS，使用@import引入後，才會編譯。 2. Mixins 常見的mixin作法，要傳入的引數前面需加上$字號。 /* Mixins */ @mixin border-radius($radius: 10px) { -webkit-border-radius: $radius; -moz-border-radius: $radius; border-radius: $radius; } @mixin...",
      categories: [],
      tags: ["SCSS","HTML"],
      id: 76
    });
    
  
    idx.add({
      title: "使用 SMACSS 製作button",
      excerpt: "module抽離出常用元件，負責大致的外觀 SMACSS是Jonathan Snook所發表的一個CSS/SASS的設計模式。在製作button時我們會把它放在module資料夾底下，並存成檔名為_btn.scss。在modules資料夾中的_btn.scss裡面撰寫Button的外觀，需要注意的是不包含顏色和其他特效。這樣是為了將顏色和細部調整放到之後的_theme.scss檔案中做調整。為什麼要這樣做呢？這樣做可以在有多個佈景主題的時候很方便的切換。也比較知道現在在這個檔案我要做哪些事情。不會一堆css碼做了什麼事情要一一去解讀。 modules/_btn.scss負責大致上的外觀 .btn { display: inline-block; height: 3rem; padding: 0 1rem; outline: none; border: 1px solid; font-size: 1.125rem;...",
      categories: [],
      tags: ["HTML","SCSS"],
      id: 77
    });
    
  
    idx.add({
      title: "練習：使用SASS開發Portfolio (1) Header 與 Footer",
      excerpt: "標題列(Header) 固定的標題 往下捲動時仍然會固定在上方 幫header加上position: fixed可以做到這個效果。透明的效果則是使用background: rgba(0, 0, 0, 0.8)。 標題列的水平置中 這邊使用的水平置中技巧是使用CSS 垂直置中的3種方法中的設定行高(line-height)的方法。 而行高我們可以在_typography.scss中統一設置，typography.scss顧名思義就是用來處理一些排版的問題，常見的設定有body、anchor、paragraph和header等等常用到的東西。如果沒有使用scss的習慣，可以利用註解區隔出一個專門處理排版的區域。 body { color: $color-text; font: $body-font-size~\"/\"$baseline $body-font;...",
      categories: [],
      tags: ["HTML","SCSS"],
      id: 78
    });
    
  
    idx.add({
      title: "Ruby中冒號開頭Symbol與&:to_s用法解釋",
      excerpt: "本篇介紹Ruby中特有的寫法，將解答&amp;:to_s和:symbol這兩種寫法的意義。並依序介紹以下議題： Symbol和String的不同之處 分別宣告兩個symbol與string。 [22] pry(main)&gt; sym = :abc =&gt; :abc [23] pry(main)&gt; str = \"abc\" =&gt; \"abc\" [24] pry(main)&gt; sym2...",
      categories: [],
      tags: ["Ruby"],
      id: 79
    });
    
  
    idx.add({
      title: "Atom殺手級套件介紹",
      excerpt: "這次來介紹兩個殺手級套件，以及其他的輔助的畫面跳躍套件來完善atom快速鍵不足的地方。 jumpy 運用他你可以快速的跳躍到畫面中程式的任何一個地方，只需按下shift + enter。 如果你使用atom-Material-UI這個套件的話可能畫面會變得像這樣。 這時候在選單列選擇 atom &gt; open your style sheet，加入以下內容，即可改善。 atom-text-editor::shadow .jumpy { &amp;.label { opacity: 0.75;...",
      categories: [],
      tags: ["Atom","Text Editor"],
      id: 80
    });
    
  
    idx.add({
      title: "HTTP Status Code In Rails",
      excerpt: "Rails將這些HTTP Status定義成有意義的單字。讓我們可以在使用的時候減少因為背錯而發生錯誤的機率。 使用方式 用symbol加上單字即可取代原本的HTTP Status Code(500) render status: 500 render status: :forbidden 這些Symbol其實定義在Rack中 原始碼 rack/utils.rb HTTP_STATUS_CODES = { # Informational...",
      categories: [],
      tags: ["Rails"],
      id: 81
    });
    
  
    idx.add({
      title: "Demo：使用Matirialize框架實現視差滾動",
      excerpt: "完成品展示頁 Materialize 是除了 Bootstrap 以外現今相當熱門的前端框架，可以製作的網頁類型相當廣泛，未來將使用 Materialize 來開發一些小作品，是今天練習的主要目的。 實現Materialize框架提供的視差滾動效果 視差滾動的效果由materialize提供的Parallax JS 套件來完成，效果可以讓圖片滿板，並且有視差效果。步驟如下： 自行撰寫.parallax-container包覆需要跟圖片有視差效果的區域。 第二層的最下方加上.parallax並包覆圖片即可完成視差效果。 &lt;section class=\"slogan-section margin-bottom parallax-container valign-wrapper \"&gt; &lt;div...",
      categories: [],
      tags: ["HTML","javascript"],
      id: 82
    });
    
  
    idx.add({
      title: "使用Github展示靜態網頁",
      excerpt: "這篇很簡短，但還是筆記一下怎麼用，因為網路上找的資料有點繁雜。\n\n原理\n\ngithub的gh-pages分支可以用來展示靜態網頁，推上去就可以正確展示了。\n\n步驟\n\n\n  建立新的branchgit branch gh-pages\n  推上githubgit push origin gh-pages\n  需要注意的是首頁要命名為index.html\n  到[github name].github.io/[repository name]網址查看，你的網頁已經展示在這個網址。\n\n",
      categories: [],
      tags: ["Github","HTML"],
      id: 83
    });
    
  
    idx.add({
      title: "Landing Page 實作：來做個簡單的Jumbotron",
      excerpt: "製作jumbotron有兩個重點 垂直置中 設定背景。 Background 設定position: center bottom讓圖片顯示出需要的區塊 使用background-size: cover;讓圖片滿版 section.intro{ padding: $baseline * 2; background-image: url('../images/intro-bg.jpg') ; background-position: center bottom;...",
      categories: [],
      tags: ["HTML"],
      id: 84
    });
    
  
    idx.add({
      title: "Demo：使用scrollspy讓畫面更生動",
      excerpt: "Demo展示頁 作法說明 1.幫body加工 將body加上display: relative，如果還是不行使用的話加上width: 100%與height: 100%。 display: relative; width: 100%; height: 100%; 2. 宣告navbar並設定target 使用js宣告target，這次我使用的target是整個navbar，用.navbar-custom來指定之，有需要的話可以調整offset修正navbar的觸發情形。 $(document).ready(function(){ $(\"body\").scrollspy({ target: \".navbar-custom\",...",
      categories: [],
      tags: ["HTML","CSS","javascript"],
      id: 85
    });
    
  
    idx.add({
      title: "Demo：實作捲動觸發CSS動畫",
      excerpt: "demo 第一部分：使用CSS撰寫Slide In效果 這個單元使用的技巧有： 使用transition讓屬性值改變時有動畫的效果 使用animation-fill-mode設定結束狀態 使用transform:translate移動元素 1. 使用transition讓屬性值改變時有動畫的效果 transition 可以將CSS改變的過程變成動畫。詳細玩一下CSS3 Transitions就懂了。 2. 使用animation-fill-mode設定結束狀態 animation-fill-mode 結束後的狀態 none：默认值。不设置对象动画之外的状态 forwards：结束后保持动画结束时的状态，但当animation-direction为0，则动画不执行，持续保持动画开始时的状态 backwards：结束后返回动画开始时的状态 both：结束后可遵循forwards和backwards两个规则。...",
      categories: [],
      tags: ["HTML"],
      id: 86
    });
    
  
    idx.add({
      title: "Demo：使用wow.js快速打造捲動式動畫網頁",
      excerpt: "我用兩個不同方法個別製作出網站來讓大家比較看看： 純CSS打造捲動式動畫網站 wow.js打造的捲動式動畫網站 接著來介紹這wowjs的製作方法與其優缺點。 使用方法： 第一步要做的是animate.css與wow.js載進網頁中。接著幫要使用動畫的部份加上.wow .animate動畫名稱屬性。wow.js用來負責偵測捲動到的位置，animate.css用來決定呈現的動畫。 HTML &lt;section class=\"wow slideInLeft\"&gt;&lt;/section&gt; &lt;section class=\"wow slideInRight\"&gt;&lt;/section&gt; JavaScript new WOW().init(); 就是這麼簡單。還有其他客製化的設定，不過彈性也不大，使用最基本的功能cp值最高。 跟手工打造的CSS動畫的不同 wow.js...",
      categories: [],
      tags: ["HTML","CSS","javascript"],
      id: 87
    });
    
  
    idx.add({
      title: "從 Tealeaf 課程學習模組化 - Sluggify Module",
      excerpt: "因為 Post 與 Category 都的網址都需要 Sluggify 以便 SEO 的進行。所以我們把 Sluggify 模組化，讓同樣的程式碼只要寫一次就好。 1. 建立module Sluggable，並引入之 在lib資料夾中建立一個名為sluggable.rb的檔案。加入extend ActiveSupport::Concern，這個技巧會讓模組間的耦合變得更加簡單。而一個class載入Sluggable時，會先做完include區塊中寫下的事情。 module Sluggable extend ActiveSupport:Concern...",
      categories: [],
      tags: ["Rails"],
      id: 88
    });
    
  
    idx.add({
      title: "Rails - 使用 will pagniate 搭配 ajax 實作無限捲動",
      excerpt: "概念： will paganiate 由送到 controller 的 params[:page] 決定回傳的@posts。 可以由我們在 controller 中定義@posts所知道。 @posts = Post.paginate(:page =&gt; params[:page]) inifite scroll event $(window).scroll(function...",
      categories: [],
      tags: ["Rails","javascript"],
      id: 89
    });
    
  
    idx.add({
      title: "Rails - Sortable Table With Ajax",
      excerpt: "前端使用sortable 後端在幫要排序的類別(這邊是Memo)加上position欄位 原理與流程 jquery-ui 的 sortable 套件內建了 serilize ，它的功用是把 id 變成 query string 依順序回傳，所以我們只要找出規則就可以知道移動的是哪些欄位，把移動後的結果用 ajax 存進資料庫即完成拖曳的動作。 程式結構(html) html指定要排序的Container為id=\"memo-table\"，讓js可以幫他加上sortable()方法。要排序的欄位加上id=\"id-&lt;%= memo.id %&gt;\"，這樣...",
      categories: [],
      tags: ["Rails"],
      id: 90
    });
    
  
    idx.add({
      title: "Rails - 如何解決ajax沒有CSRF Key的問題 ",
      excerpt: "錯誤訊息 當瀏覽器發生422錯誤，很有可能是缺少CSRF Key所引起的。這時候可以到 Log 確認一下是否是缺少 CSRF Key的情形。 方法一：用js抓mete的csrf-token $(document).ajaxSend(function(e, xhr, options) { var token =$j(\"meta[name='csrf-token']\").attr(\"content\"); xhr.setRequestHeader(\"X-CSRF-Token\", token); }); 想要學習處理csrf可以看看jquery-ujs的source code...",
      categories: [],
      tags: ["Rails"],
      id: 91
    });
    
  
    idx.add({
      title: "CSS排版技巧 - 文繞圖",
      excerpt: "文繞圖 先看效果，這次要做的是文繞圖技巧，可以選擇靠左或靠右。 html結構 圖片(img)必須在段落(p)的上面，當圖片加上float:left屬性時，圖片的空間會消失，變成浮在畫面上，利用這個技巧，我們來做到文繞圖的效果。 &lt;div class=\"image-container\"&gt; &lt;img class=\"image1\" src=\"http://zh-tw.learnlayout.com/images/ilta.png\" alt=\"\"/&gt; &lt;p class=\"pp1\"&gt;Lorem Ipsum is simply dummy text of the printing...",
      categories: [],
      tags: ["HTML","CSS"],
      id: 92
    });
    
  
    idx.add({
      title: "Rails - 使用 dropzone.js 實現檔案上傳",
      excerpt: "實現上傳檔案 create的時候controller要設定一些值給js接。 def create @upload = Upload.create(upload_params) if @upload.save # send success header render json: { message: \"success\", fileID: @upload.id...",
      categories: [],
      tags: ["Rails","Ajax","javascript"],
      id: 93
    });
    
  
    idx.add({
      title: "在 Mac OS X 下使用 brew 安裝 Go",
      excerpt: "兩種安裝方法 在 Mac OS X 下安裝 Go 有兩種方法，一種是去官網下載安裝包，另一種是使用 Homebrew 來安裝，為了以後更新的便利性著想，我決定使用 Homebrew 來安裝 Golang。 ps: 如果你還沒有 Homebrew 的話，需要先安裝 Homebrew 才能進行以下的安裝。 更新...",
      categories: [],
      tags: ["Golang","OSX"],
      id: 94
    });
    
  
    idx.add({
      title: "Deploy Redmine to VPS by Rails way in Ubuntu 14.04",
      excerpt: "前言 Redmine 是一套以 Ruby 為基底的專案管理網頁應用程式。而且正好就是使用 Ruby on Rails 開發的。所以如果你是 Rails 工程師，使用一般部屬 Rails 專案的方式就可將 Redmine 架起來。 本文記錄下來的方法，是我覺得最簡單，並且沒有副作用的架設方法。如果你要架設的不是 Redmine ，而是其他的 Rails 專案，也同樣適用。...",
      categories: [],
      tags: ["Rails","Redmine"],
      id: 95
    });
    
  
    idx.add({
      title: "Rails 筆記 - 使用 ActiveRecord::Enum 設定狀態",
      excerpt: "使用 Array 表達狀態 class Order KIND = [ ['未付款', 0], ['已付款', 1], ['已出貨',2] ] end 代表 orders 這張表中的 kind 欄位如果是...",
      categories: [],
      tags: ["Rails"],
      id: 96
    });
    
  
    idx.add({
      title: "jQuery vs Ruby - 取得倒數的元素並組成字串",
      excerpt: "摘要 本篇利用把陣列轉成字串這個題目，探討 jquery 和 ruby 中，map 和 join 行為的差異。 1. 在 jQuery 中可以用類似 Ruby 的方式取得尾部的倒數第幾個元素。 $('span[itemprop=title]').eq(-2) 對照 ruby 語法 arr=[1,2,3,4,5,6]...",
      categories: [],
      tags: ["jQuery","Ruby"],
      id: 97
    });
    
  
    idx.add({
      title: "JS - 確認 jQuery 是否正確載入",
      excerpt: "使用情境 有時候你不能確定環境是否已經載入 jQuery，所以你也不能使用 jQuery.ready()。 例如：你想要在別人的網頁上執行一段 javascript 程式碼。 這時候你就可以用本篇筆記記錄的方法等待 jQuery 載入後再執行自己的程式碼。 程式碼： //如果沒有載入的話，會再執行一次直到 jQuery 正確載入。 function defer(method) { if (window.jQuery) method();...",
      categories: [],
      tags: ["javascript","jQuery"],
      id: 98
    });
    
  
    idx.add({
      title: "在 Atom 設定 .god 對應至 Ruby Syntax ",
      excerpt: "簡介 God God 是以 Ruby 撰寫而成，但不僅限於使用於執行 Ruby 檔，常見的用途是維持程式的運行使程式不中斷，萬一中斷可以自動重啟。不過本篇的重點不在於 God 的使用方法，而是在 Atom 編輯器中於如何讓.god可以對應到 .rb 的語法高亮。 這邊就是設定的方法，打開 config.cson，可以經由 menu 列的 Atom &gt;...",
      categories: [],
      tags: ["Atom","Text Editor"],
      id: 99
    });
    
  
    idx.add({
      title: "Generate Safety Query String In ActiveRecord ",
      excerpt: "Solution 1: sanitize_sql ActiveRecord::Base.send(:sanitize_sql,[\"select * from my_table where description='%s' and id='%s'\",\"mal'formed\", 55], \"my_table\") =&gt; \"select * from my_table where description='mal\\\\'formed'...",
      categories: [],
      tags: ["Rails","ActiveRecord"],
      id: 100
    });
    
  
    idx.add({
      title: "Rails: 使用 Whenever 產生 Cronjob ",
      excerpt: "Part 1 - Crontab 介紹 Crontab 是 Linux 中用來管理例行事務的程式，而 whenever 實際上的作用就是用來產生 cronjob 的，所以先介紹一下 Linux 系統中的 crontab 如何操作。 crontab 指令 比較常用指令的有以下幾項：...",
      categories: [],
      tags: ["Rails","Cronjob"],
      id: 101
    });
    
  
    idx.add({
      title: "Linux - 如何查詢 OS 版本",
      excerpt: "要接手 Server 第一件事情就是要了解 server 的環境啦。 這邊要記錄的是如何判別 Linux 系統類別的方式 1. 確認 Kernel 版本 使用 uname -or 可以取得 kernel 的版本 $ uname...",
      categories: [],
      tags: ["Linux"],
      id: 102
    });
    
  
    idx.add({
      title: "ActiveRecord - 更新大量資料",
      excerpt: "前言 本文使用的兩種方法，實際上都是用一個 sql 插入或更新所有的資料。 原因是使用其他的方法都沒有使用一個sql插入快。 如果插入的筆數過多，需要調整 sql buffer 的大小。 本例子的情景是一次更新100筆資料，資料量不大，所以不會遇到這個問題。 方法一：純 SQL 因為欄位很多，我要傳送的欄位又是完整的一個不少，所以我用 Model.attribute_names 來組合要傳入的欄位名稱。 然後將要更新的 Hash 組成 VALUES (x1,...",
      categories: [],
      tags: ["Rails","ActiveRecord"],
      id: 103
    });
    
  
    idx.add({
      title: "Ruby 爬蟲小技巧 - 處理 Html Entity",
      excerpt: "這是一個在工作上遇到的小問題。 把網頁爬回來的時候有 HTML Entity 的編碼，看起來很不美觀。 舉例來說，爬回來的標題如果含有 HTML Entity 會是這個樣子: PURUS空氣清淨器&amp;#40;鴻海集團創星出品&amp;#41; 如果我想要使用資料建立自己資料庫的時候勢必要對 html entity 做一些處理 這時候 Gemhtmlentities就派上用場了。使用方法： require 'htmlentities' str =...",
      categories: [],
      tags: ["Ruby","Crawler"],
      id: 104
    });
    
  
    idx.add({
      title: "Ruby - 利用 ARGV 特性執行指定的方法",
      excerpt: "情境 我想手動執行 class 的某個方法。這邊的例子是當我想移動的時候，我可以選擇走路、跑步或是游泳。 方法一： 在 irb 中引入 Ruby 檔 class Move def self.walking puts \"walking\" end def self.running puts...",
      categories: [],
      tags: ["Ruby"],
      id: 105
    });
    
  
    idx.add({
      title: "Ruby - 爬網頁時遇到的編碼錯亂問題",
      excerpt: "問題描述 編碼問題是寫爬蟲常會遇到的問題。當你沒有處理好編碼問題，爬回來的網頁無法進行字串的切割，也無法使用 nokogiri 抽離需要的部份。 解決方法 找到原始網頁的編碼chartset='big' 把網頁 force_encoding 至原始格式 將網頁轉換成 utf-8，這是 ruby 預設的編碼，也是 nokogiri 接受的編碼。 force_encoding 的意思是強制使用某種編碼格式，但是其實不會進行編碼的轉換，因為ruby預設是utf-8， 所以如果網頁是 big5 我們就得先幫網頁加上網頁原有的編碼格式。...",
      categories: [],
      tags: ["Ruby","Crawler"],
      id: 106
    });
    
  
    idx.add({
      title: "Ruby metaprogramming - Method Lookup",
      excerpt: "介紹 ruby metaprogramming 這本書除了教如何用 ruby 來生成其他的程式語言外，對語言特性的描述是比較深入的。因此在研讀這本書的同時，記錄下一些我覺得重要的部份。這些筆記不會依照章節的順序性。而是隨機記錄我需要的部分。 Method Lookup 即 Ruby 物件中查找方法的順序。從 Module 得到的方法與從 Class 繼承的方法其實是有順序性的。 知道其順序性後我們在編寫的程式碼的時候才可以比較清楚的預想程式行為的發生的情況。在追蹤原始碼的時候對語言特性多一份的理解追起來就會順利一點快速一點。 prepend 與 include 這邊是...",
      categories: [],
      tags: ["Ruby","Metaprogramming"],
      id: 107
    });
    
  
    idx.add({
      title: "Elasticsearch 筆記",
      excerpt: "前言 最近工作上使用的資料庫主要以 Elasticsearch 為主。而 Elasticsearch 跟傳統的關聯式資料庫有諸多的不同之處。初期在開發的時候並不是那麼快的上手。所以記錄下該如何使用 Elasticsearch 與如何在官方文件中找到自己需要的功能。 1. 準備工作 1.1 你需要知道的名詞 一開始我對名詞的對應並不是特別的重視，隨著實戰上的需求，我開始需要查找 API 的時候，發現文件有點不知道從何看起。後來隨著使用的功能越來越多。必須對 Elasticsearch 有更深一層的了解，於是花了大約兩天左右的時間把文件重要的部份大略的看過一次。這樣的過程讓我理解了哪些功能可以在哪些地方找到，也是我寫下這篇筆記的動機， index 對應關聯式資料庫中的 database。...",
      categories: [],
      tags: ["Elasticsearch"],
      id: 108
    });
    
  
    idx.add({
      title: "Ruby metaprogramming - Open Class and Refine ",
      excerpt: "簡介 Open Class 是 Ruby 常用的技巧，指的是我們可以覆寫已經存在的方法，來修改物件或類別的行為。 在這邊我沒有要講詳細的作法，要介紹的是在 Ruby 2.0 中新增的 refine Refine Refine 是 ruby 2.0 之後加入的元素。 會使用 Refine 的原因是使用一般...",
      categories: [],
      tags: ["Ruby","Metaprogramming"],
      id: 109
    });
    
  
    idx.add({
      title: "Ruby - 讓 irb 更好用",
      excerpt: "前言 在使用pry的時候我們可以回到上一個輸入的指令，擁有記錄指令歷史的功能。其實irb也可以！ 開始修改 修改~/.irbrc require 'irb/ext/save-history' IRB.conf[:SAVE_HISTORY] = 200 IRB.conf[:HISTORY_FILE] = \"#{ENV['HOME']}/.irb-history\" 修改完之後按下方向鍵上和下即可使用上一個用過的指令。而實際上，歷史紀錄是儲存在~/.irb_history。 另一個常用的功能 - autocomplete 我們也順便把它開起來。 在~/.irbrc中irb/completion即可，現在你的 irb 按下...",
      categories: [],
      tags: ["Ruby"],
      id: 110
    });
    
  
    idx.add({
      title: "在 OSX 環境中測試 etc/hosts 是否成功修改",
      excerpt: "前言 透過修改 etc/hosts 讓我們不需要透過 DNS 也能模擬網域名稱連線到伺服器。 可是設定是否成功？這時候我們可以用一些測試工具來檢測之。 OSX環境下 OSX 內建 dscacheutil 工具，可以用來檢測網址名稱對應 ip 的結果。 使用方法 dscacheutil -q host -a name...",
      categories: [],
      tags: ["OSX"],
      id: 111
    });
    
  
    idx.add({
      title: "EFK(1) - 介紹 ELK Stack( Elasticsearch + Logstash + Kibana)",
      excerpt: "ELK 整體架構 最左邊的 Logstash Shipper 用來運送 Log 到 Log 處理中心。 Redis 當做 Buffer 來緩衝資料量瞬間爆量的問題。 右邊的 Logstash 將 Log 加工成 Elasticserach、Kibana...",
      categories: [],
      tags: ["Fluentd","EFK","ELK","Devops"],
      id: 112
    });
    
  
    idx.add({
      title: "EFK(2) - 介紹 EFK (Elasticsaerch + Fluentd + Kibana)",
      excerpt: "Fluentd 介紹 Fluentd 跟 Logstash 扮演的角色相同。 過去 Logstash 的歷史有效能不佳的記錄，Fluentd 在效能上的口碑更好。 如下圖所示，Fluentd 可以將蒐集 Log 負責的過程統一規格化。我們在使用的時候，選用想要蒐集Log樣式的 input plugin， 例如：要蒐集 apache 的 log...",
      categories: [],
      tags: ["Fluentd","OSX","EFK","Devops"],
      id: 113
    });
    
  
    idx.add({
      title: "EFK(3) - Rails 與 Fluentd 的串接方法",
      excerpt: "幾種可以跟 Rails 串接的方式 gem ‘fluent-logger’ Centralize Logs from Ruby Applications 自定解析 fluent/fluent-plugin-grok-parser: Fluentd’s Grok parser 使用 Rails-logger 來蒐集, 如果你的目標是讓 EFK...",
      categories: [],
      tags: ["Fluentd","OSX","EFK","Devops"],
      id: 114
    });
    
  
    idx.add({
      title: "EFK(4) - 讓 Elasticsearch 與 Kibana 能夠接收 Rails 的 log",
      excerpt: "架構 安裝步驟 2.1 安裝 elasticsearch $ curl -O https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-5.0.2.tar.gz $ tar zxvf elasticsearch-5.0.2.tar.gz $ cd elasticsearch-5.0.2 啟動 elasticsearch $ ./bin/elasticsearch...",
      categories: [],
      tags: ["EFK","Fluentd","Devops"],
      id: 115
    });
    
  
    idx.add({
      title: "EFK(5) - Fluentd 高可用架構(High Availibity)",
      excerpt: "架構 之前我們的架構是直接由 fluentd td-agent 傳送到 elasticsearch (如下圖) 為了更高的可用性(High Availibity)，我們在中間加入 aggregator 的角色，讓在 td-agent 扮演 forwarder 角色，職責更加單一，forwarder 只負責「傳送資料給 aggregator」。過濾(filter)資料的工作轉由 aggregator 負責，這樣的架構下降低了原本應用程式伺服器(application server)的負擔，提供了更高的可用性。架構如下：...",
      categories: [],
      tags: ["EFK","Fluentd","Devops"],
      id: 116
    });
    
  
    idx.add({
      title: "EFK(6) - 使用 docker 包裝 Fluentd",
      excerpt: "Aggregator 與 Forwarder 使用 docker 建立 fluentd image 為了模擬需要的環境，我們來使用 docker 建立 fluentd image 參考fluent/fluentd-docker-image來製作個人化的 fluentd image 2.1 準備工作 建立 custom-fluentd...",
      categories: [],
      tags: ["EFK","Fluentd","Devops"],
      id: 117
    });
    
  
    idx.add({
      title: "CORS in Rails",
      excerpt: "Problem 跨網域存取的時候需要使用 CORS 來讓不同網域也可以存取相同網域的資源。請看下圖，Server 返回的 Response 必須明確指出哪些網域可以存取該 Server 的資源。 有這樣的行為模式的話，是不是可以在 Controller 中的 Response 加上 Header 來達成 CORS 呢？ 答案是否定的。 因為當...",
      categories: [],
      tags: ["Rails","CORS","gem"],
      id: 118
    });
    
  
    idx.add({
      title: "Go - 在 OSX 安裝 GVM",
      excerpt: "前言 之前有寫過一篇用 Brew 安裝 GO，因為習慣上會用 rvm、nvm 來管理程式語言的版本， 所以心血來潮也想試試看安裝 GVM 在作業環境，不過如標題所示， gvm Bug 滿多，而且跟我慣用的 Fish shell 不太相容。 總結下來，如果使用 OSX 環境推薦大家使用 Brew...",
      categories: [],
      tags: ["Golang"],
      id: 119
    });
    
  
    idx.add({
      title: "Time in Rails",
      excerpt: "Rails 中的時間 Rails 中的時間是個有趣的議題，如果不多加注意，很容易被雷到。 尤其是一般在本地端開發的的時候並不會有時區不同的問題，但是一放到 Server 上，\b就會忽然爆炸。 是不能不小心的一個問題。 如果你在 config/application.rb 設定 Time.zone，範例如下: config.i18n.default_locale = \"zh-TW\" 如果透過 ActiveRecord 來存取，取得的會是你在 application.rb 裡面設定的...",
      categories: [],
      tags: ["Rails","Time"],
      id: 120
    });
    
  
    idx.add({
      title: "使用 GIT Precommit hooks 防止 Binding.pry 進入 Commit",
      excerpt: "Problem 如果不小心把 binding.pry commit 進 git 而且不幸的 push 的話, 勢必要使用另一個 commit 來修正。如果要讓這個 commit 不見可能就需要用 git push -f 來修改。這樣做很醜，不優雅。根治的方法是 - 根本不應該將...",
      categories: [],
      tags: ["Rails","Time"],
      id: 121
    });
    
  
    idx.add({
      title: "Web 基本功 - Cookie 與 Session",
      excerpt: "Cookie 1.1 什麼是 Cookie ? Cookie 在使用者第一次進入網站的時候產生。Browser 記錄一些隱私性較低的資料。 例如: 使用者第一次進入網站的時候會跳出教學視窗。當使用者點擊[關閉]後，Cookie 內記錄使用者已經看過教學了。使用者在下次登入的時候因為 Cookie 內記錄著使用者 已經看過教學，所以就不會跳出教學視窗。 1.2 Cookie 的特性 每個網站的 Cookie 是分開的,...",
      categories: [],
      tags: ["Web Foundation","Coockie","Session"],
      id: 122
    });
    
  
    idx.add({
      title: "OLTP 與 OLAP",
      excerpt: "什麼是 OLTP? 最近在讀資料庫文件的時候接觸到 OLTP 這個名詞，大致上理解並比記下來。 數據處理大致可以分成兩類: OLTP 與 OLAP。OLTP (Online Analytical Processing)指的就是傳統式關聯式資料庫。用在日常的的事物處理，比如說資料庫的增、刪、查、改。有以下特性: 並發性高 嚴格要求事務的種安全性 Realtime 要求高 什麼是 OLAP? OLAP (On-Line...",
      categories: [],
      tags: ["Database"],
      id: 123
    });
    
  
    idx.add({
      title: "[譯] Amazon S3 Delimiter and Prefix",
      excerpt: "From: Amazon S3 Delimiter and Prefix - realguess posted at 2014/05/24 AWS S3 是一個不昂貴的線上檔案儲存服務，我們可以透過 javascript SDK 來使用 S3。當我使 SDK 的時候有以下幾件令人疑惑的事情:...",
      categories: [],
      tags: ["AWS","S3"],
      id: 124
    });
    
  
    idx.add({
      title: "[譯] 使用 AWS Ruby SDK v2 更新 S3 物件 Metadata",
      excerpt: "From: Updating S3 Object Metadata With the AWS Ruby SDK v2 Author: Matt posted at: 2017/5/31 今天我在 S3 就如同在玩火一樣 -...",
      categories: [],
      tags: ["AWS","S3"],
      id: 125
    });
    
  
    idx.add({
      title: "Mysql - 如何修改 partition 並還原資料",
      excerpt: "情境 在測試環境中我們想要置換 partition 的分區方式，而我們不想要遺失測試資料，所以需要備份 partition table 的資料。因為要修改的資料欄位很多，我不想要直接使用 alter table 的方式來修改 partition 分區，取而代之的是，我想要用 Migration 的方式來管理，所以會採用先備份 -&gt; 修改 -&gt; 接著再還原的方式。 深入了解 mysqldump...",
      categories: [],
      tags: ["Database","Mysql"],
      id: 126
    });
    
  
    idx.add({
      title: "用 Harbor 架設 Private Docker Registry",
      excerpt: "用 Harbor 架設一個僅供公司內網存取的 Docker Registry 什麼是 Docker Registry ？ 顧名思義就是用來儲存鏡像檔 (Image) 的地方。例如：DockerHub 就是 Docker 官方提供的 Docker Registry，你可以把你自己編寫的 Dockerfile 編譯之後上傳到 Dockerhub...",
      categories: [],
      tags: ["Harbor","Docker"],
      id: 127
    });
    
  
    idx.add({
      title: "從零開始學 DevOps — 那就選擇最簡單的 Drone CI 開始吧！",
      excerpt: "從零開始學 DevOps — 那就選擇最簡單的 Drone CI 開始吧！ 目前 DevOps 已經是 Backend 或 Frontend 多多少少都會碰到的部份。而 Drone，正可以讓開發者專心開發自己的專案，每個專案獨立設定需要的 CI / CD 流程，解放前端、後端工程師的戰鬥力，將測試與部屬結合在開發流程中，降低手動測試需要的時間。話不多說，趕快開始架設第一個 Drone...",
      categories: [],
      tags: ["DevOps","DroneCI"],
      id: 128
    });
    
  
    idx.add({
      title: "Kubernetes 教學 01 - 概念與架構",
      excerpt: "為什麼該學 K8S ？ Pod、Node 是什麼？搞的我好亂呀！ 適合讀者： 已經會使用 Docker，但是不知道 Kubernetes 是什麼。 想看看 Kubernetes 到底在幹嘛的人。 為什麼該用 Kubernetes? Kubernetes 中間共有八個字母有點長，所以大家就將他簡稱為 K8S。但使用 K8S 有什麼好處？...",
      categories: [],
      tags: ["Kubernetes","Minikube"],
      id: 129
    });
    
  
    idx.add({
      title: "Kubernetes 教學 02 — 在 Minikube 上部屬 Python Flask 應用程式",
      excerpt: "Minikube、kubectl 終於派上用場囉 前情提要 在 前一篇 中我們弄懂了 K8S Cluster、Node、Pod 與 Container 的關係，並且在文章末段介紹了能夠與 kubectl -「能夠與 K8S 溝通的命令列工具」。這次我們用實際的操作，來認識容器化的實際過程，並把它部屬到本地的 Kubernetes 上面。 什麼是 Minikube ？...",
      categories: [],
      tags: ["Kubernetes","Minikube","Python","Flask"],
      id: 130
    });
    
  
    idx.add({
      title: "Unit Test 中的替身：搞不清楚的Dummy 、Stub、Spy、Mock、Fake",
      excerpt: "Unit Test 中的替身：搞不清楚的Dummy 、Stub、Spy、Mock、Fake 最近開始接觸單元測試，一堆名詞看不懂，來狠狠地 K 一下。而單元測試中的最佳男配角，就是替身 Double。藉由寫一篇文章的方式來讓自己更了解單元測試中的重要部分。一起來學寫測試，Go Go !! 註：接觸時間還很短，有錯還請不吝指正，如果之後發現我有理解錯誤再回來更正。 單元測試是什麼？ 單元測試可以讓你快速驗證程式的行為。了解單元測的話首先來介紹一下 SUT 目標對象。 舉個例子：你想要測試一台車是不是可以開，那麼 SUT 目標對象就是這台車。 為了確保這台車可以開，那麼就可以寫一個「這台車應該要可以開」的測試。如果這台車發生了故障，測試就會告訴你，這台車是壞掉的。 單元測試讓你的程式更容易維護。原因在於你能夠對程式寫測試，代表你寫的程式的「使用說明書」清楚易懂。使用說明書很容易懂，就可以直接拿來用，減少重複的程式碼，符合...",
      categories: [],
      tags: ["Unit Test"],
      id: 131
    });
    
  
    idx.add({
      title: "TPM — 套件管理工具 ，讓你的 TMUX 更好用",
      excerpt: "tpm — 套件管理工具 ，讓你的 tmux 更好用 最近因為工作上需要用到開很多個視窗的情景，研究了一下如何把 tmux 變得更具有生產力。 tmux 是什麼？ tmux 是一個很好用的遠端 session 管理套件，兼具效能與功能性，可以讓你在遠端伺服器中，輕易管理背景執行程式。 Larry 在 **終端機 session 管理神器...",
      categories: [],
      tags: [],
      id: 132
    });
    
  
    idx.add({
      title: "Kubernetes IDE - Lens 用圖形化介面管理 K8S",
      excerpt: "以往我們在管理 Kubernetes 集群的時候，需要大量的命令列操作，需要去四處找尋需要的資訊，例如你想看 Node 的狀態你可能需要在 AWS Console 上面看，如果你用的是 GKE 的話你就需要到的 GCP 的後台上看。你想要進入 Pod 你需要先下 kubectl get pods取得 pod 列表，接著再下 kubectl...",
      categories: [],
      tags: ["Kubernetes"],
      id: 133
    });
    
  
    idx.add({
      title: "TLDR 命令列神兵｜Linux 入門必裝",
      excerpt: "TLDR 命令列神兵｜Linux 入門必裝 TL;DR 的意思是：哩供蝦？講重點好嘛？ TLDR 能夠讓初學程式的新手 ，輕鬆了解命令列工具的各種 Linux 指令，並且自由運用。本篇文章分成幾個兩個部分： 命令列工具 Command line tool 到底是什麼東西？ TLDR 是什麼東西？它如何幫助我們快速適應 Linux 命令列工具？ 話不多說，我們開始吧。...",
      categories: [],
      tags: [],
      id: 134
    });
    
  
    idx.add({
      title: "從 Github 開源指南｜學習如何貢獻開源專案",
      excerpt: "從 Github 開源指南｜學習如何貢獻開源專案 本週我們來讀一下「如何為開源做貢獻」。這份文件是 Github 的 Open Source Guide 開源指南，約莫兩年前剛出的時候全部是英文版的，已經三年了，拖到現在才讀（汗）。 （這篇是閱讀開源指南的筆記，原創內容偏少，原文在下方連結） 如何為開源做貢獻？ 透過為開源貢獻力量，能從中學習、幫助他人並且從中累積相關技能的經驗 - 任何你能想像得到的技能。 為什麼會有人為開源做出貢獻？有數不清的原因！…opensource.guide 是 Github 7000 顆星星的開源專案...",
      categories: [],
      tags: ["Github","Open Source"],
      id: 135
    });
    
  
    idx.add({
      title: "ArgoCD - 透過 ArgoCD 認識 GitOps",
      excerpt: "ArgoCD — 透過 ArgoCD 認識 GitOps 什麼是 GitOps ? 兩年前初次聽到 GitOps 的時候，我想說是不是只要 Git tag 觸發一些部屬相關的事情，像是下了某個 tag，就會觸發某 Ansible 的工作，部屬某一台伺服器。很遺憾，完全不是我想的那樣。 在最近實際將 GitOps...",
      categories: [],
      tags: ["Kubernetes"],
      id: 136
    });
    
  


console.log( jQuery.type(idx) );

var store = [
  
    
    
    
      
      {
        "title": "Design Pattern - 資源總整理",
        "url": "https://lukahuang.com/design-pattern-resources/",
        "excerpt": "要學Design Pattern之前, 一定要先搞懂的物件導向基礎: 強烈建議先閱讀91Design Pattern學習的心得之後，再開始學習Design Pattern。文中提到學Design Pattern時必須具備下列的物件導向知識。強調Design Pattern只是幫助物件導向程式達到「高內聚、低耦合」的目的。並且需遵照設計原則來使用。 三大特性：封裝、繼承、多型 兩種抽象：interfact、abstract 目的：高內聚、低耦合 SOLID 原則：單一職責原則、開放封閉原則、里氏替換原則、最小知識原則、介面隔離原則、依賴反轉原則 設計原則：DRY、KISS、YAGNI 設計方式：interface-driven、intention-driven、生成物件與使用物件分開 延伸閱讀： Kent Beck 的四個簡單程式設計原則 一些軟件設計的原則...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Design Pattern - Command Pattern",
        "url": "https://lukahuang.com/design-pattern-command-pattern/",
        "excerpt": "定義: Encapsulate a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "UML - Class Diagram",
        "url": "https://lukahuang.com/uml-class-diagram/",
        "excerpt": "Design Pattern的學習中頻繁的出現著Class Diagram，如果不仔細地了解箇中意思，將會學得很辛苦，因此特別介紹Class Diagram，也就是類別圖。UML中的專有名詞與一般寫程式的專有名詞並不完全相同，例如UML用的一般化（generalization）這個名詞就等於是物件導向語言中「繼承」。而這些UML特有的名詞經常會出現在學習的過程中，如果能夠了解，對學習來說很有幫助，因此建議熟記在Class Diagram中出現的專有名詞。 最後簡單的介紹一下UML，UML是描述物件導向程式的語言，使用圖形來表示我們設計的軟體。從需求設計實作，都可以用UML來表示。而Class Diagram描述著系統的結構，是UML中唯一可以對應實際物件導向程式的UML圖。 能見度(Visibility) 加在Class中的變數或是方法前面。 public:大家都可以使用。 private:只能在自己本身的Class中使用。 protected:跟自己有繼承關係的class皆可共用。 package:在同package下可以使用。 多重性(multiplicity) 關係 類別間的關係是最重要也是最需要釐清地部分，小小的不同意思都會差的很多，請特別注意。 ** Generalization 一般化** 說明：物件導向程式中稱為Inheritance-繼承。表示繼承了父類別。...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "爆炸性的學習",
        "url": "https://lukahuang.com/explosive-learning/",
        "excerpt": "這學期我的目標是成為一個有爆炸學習速度的男人\n忽然想到很多值得一試的方法：\n\n\n  \n    聚焦\n一段時間內聚焦於一個小目標，不顧一切的把它完成。避免游移所造成的浪費。\n  \n  \n    用大量的小目標代替一個大目標\n像演算法這種需要大量時間摸索的科目，設立一些小目標，一一達成目標。\n  \n  \n    捲起袖子下去實作是進步最快的方式\n不斷的練習可以幫助熟練，第一天也許比較痛苦，第二天第三天重複一樣的動作，就會慢慢漸入佳進，不斷的練習！！\n  \n  \n    早上起來固定看一些影片\n將原本會浪費時間的習慣用一些學習的習慣來替代，久而久之非常顯著。\n  \n  \n    快速的累積文章（以敏捷式開發代替完美主義）\n我之前想寫design pattern文章的方式太過要求，想做到面面俱到，但這樣做往往會在某些點鑽牛角尖。用敏捷式開發吧！先寫出一篇來，聽取大家的建議，或是自己覺得不好的地方再做修改！這樣會有效率的多。\n  \n  \n    擁抱限制\n常常因為效率不錯，就無限度的加長工作時間，卻沒想到沒有時間的限制下，動力會大大的降低。時間一長發現自己什麼都沒做到，於是只好再加長工作時間，惡性循環。給自己定下一個合理的工作時間吧！足夠學習，又不會令人喪失鬥志。如果再三小時內完成一個小功能是一個好玩的挑戰。若是覺得前三個小時效率不錯，那麼繼續工作9小時，是不是令人提不起勁呢？\n  \n\n\n回頭想想，如果我可以快速的學會一個東西，那我不就有很好的素材可以寫。如果我為了寫網誌而拖累了學習速度，那我不僅寫得文章數少，學到的東西又更加少。完全本末倒置。\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "CSS簡介",
        "url": "https://lukahuang.com/front-end/introduction-to-css/",
        "excerpt": "了解CSS運作方式的關鍵 想像每個HTML元素四周都有看不見得方框，使用Rules來改變呈現的方式。 CSS的運作方式 CSS associates style rules with html elements （CSS的運作方式是將HTML和Rules連結起來。） Rules rules包含兩個部分：selector與declaration。 Declaration Declaration包含了Property和Value。 CSS properties affect how elementts...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "HTML額外標籤",
        "url": "https://lukahuang.com/front-end/html-tags/",
        "excerpt": "因為學習HTML在一般的標籤上並沒有遇到什麼問題，所以就不多做說明。 直接進入比較容易混淆不理解的地方，就是HTML的額外標籤。 HTML的額外標示 一般常見的標籤，很容易理解，所以特別針對HTML的額外標示來加強需具備的Web知識。 1. DOCTYPE html經歷了不同版本，所以每個網頁一開始都應該告訴瀏覽器使用的html版本。 &lt;!DOCTYPE html&gt; 2. 註解 html裡的註解以表示 3. id屬性 a) 每個HTML屬性都可以使用id屬性，將某元素「獨立」辨識出來，也就是說它是唯一的。 b) 同一個頁面上的兩個元素不能有相同的id屬性，否則該值就不再唯一。 c) 學習javascript時，id屬性可以讓程式碼與特定元素互動。...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Algorithm - Dijkstra's Algorithm",
        "url": "https://lukahuang.com/algorithm-notes-dijkstras-algorithm/",
        "excerpt": "資料結構 Q是一個以d值來做鍵值的Queue，取出時會從最小的d開始取，也就是取出距離最短的頂點V。 S是一個頂點的集合，用來存放從Q中刪除的頂點。 Dijkstra’s Algorithm DIJKSTRA(G,w,s) 1. INITIALIZE-SINGLE-SOURCE(G,s) 2. S = ∅ 3. Q = G.V 4. while Q ≠...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Algorithm - BFS(Breadth-first Search)(ch22.1 22.2)",
        "url": "https://lukahuang.com/algorithm/algorithm-notes-fundamental-graphics-algorithms-and-bfs/",
        "excerpt": "Graph algorithm 符號說明 Graph用G=(V,E)來表示，V是Vertex的縮寫，也就是頂點。E是Edge的縮寫，也就是邊。理解V和E分別是頂點和邊之後，就不難理解Graph是由點和邊構成，所以表示成G=(V,E)。從頂點u到頂點v的一個邊則用(u,v)來表示。 表示Graph G=(V,E)有兩種方式，分別是adjacent matrix與adajecent list。比較常用adjacent list來表示graph，因為它花費的cose比較小。表示一個儲存Graph中鄰近u的所有頂點的adjacent list，用Adj[u]來表示。 Breadth-first Search(寬度優先搜尋) Minimum spanning tree中的Prim演算法和單一來源最短路徑問題中的dijkatra演算法都使用類似BFS的演算法的方法。BFS有系統的搜尋Graph G=(V,E)的邊來發現可以從Source(起始點，之後縮寫成S)到達的每個頂點。 BFS-Tree的建構 BFS-Tree : 產生一棵以S為根的BFS-Tree來包含所有可到達的頂點。...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Algorithm - DFS(Depth-First Search)(ch22.3)",
        "url": "https://lukahuang.com/algorithm-notes-dfs-depth-first-searchch/",
        "excerpt": "頂點的資料結構 DFS與BFS不同的是，在頂點上須標明兩個時間標籤(Timestamp，以頂點v為例子，就是v.d和v.f這兩個屬性。所以變成以下三個。 u.π - predecessor vertex. u.d - timestamp when the vertex is first discovered (and is subsequently colored gray)...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Algorithm - 最短路徑問題(ch24)",
        "url": "https://lukahuang.com/algorithm-notes-shortest-path/",
        "excerpt": "最短路徑問題(Shortest Path) 以下說明摘錄自Algorithm 「最短路徑」是由起點到終點、權重最小的路徑。 最短路徑問題包括下列幾種： Point-to-Point Shortest Path，點到點最短路徑： 給定起點、終點，求出起點到終點的最短路徑。一對一。 Single Source Shortest Paths，單源最短路徑： 給定起點，求出起點到圖上每一點的最短路徑。一對全。 All Pairs Shortest Paths，全點對最短路徑： 求出圖上所有兩點之間的最短路徑。全對全。 Relaxation（鬆弛）...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Algorithm - Bellman-Ford Algorithm(ch24.1)",
        "url": "https://lukahuang.com/algorithm-notes-bellman-ford-algorithmch/",
        "excerpt": "BELLMAN-FORD Algorithm BELLMAN-FORD演算法是個很容易撰寫的演算法。而且他可以偵測負重量循環(negative weight cycle)。 BELLMAN-FORD(G,w,s) 1. INITIALIZE-SINGLE-SOURCE(G,s) 2. for i = 1 to |G.V|-1 3. for each edge (u,v)...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Algorithm - Heap sort",
        "url": "https://lukahuang.com/algorithm-notes-heap-sort/",
        "excerpt": "Heap heap可看作是幾乎完整的二元樹的陣列。 PARENT(i) return i/2 LEFT(i) return 2i RIGHT(i) return 2i+1 Max heap與Min heap Max heap最大的元素在根部 Min heap最小的元素在根部 heapsort用的是Max heap...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Algorithm - Merge sort(ch2.3)",
        "url": "https://lukahuang.com/algorithm-notes-merge-sort/",
        "excerpt": "#原理 每跑過一次merge-sort主程式都會把陣列分割成兩半。直到分成每個元素分離之後，再開始兩兩的排序並合併。合併到最後即為排序好的結果。 #程式碼說明 MERGE-SORT主程式負責分割陣列，等到分割到不能分割，也就是每個陣列剩下一個元素的時候，改由MERGE副程式兩兩進行合併，合併的時候加以排序，等到全部合併成一個陣列之後，剛好就排序完成了。 MERGE-SORT(A,p,r) 1 if p &lt; r 2 q = (p+r)/2 3 MERGE-SORT(A,p,q) 4 MERGE-SORT(A,q+1,r) 5 MERGE(A,p,q,r)...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Algorithm - Quick sort",
        "url": "https://lukahuang.com/algorithm-notes-quick-sort/",
        "excerpt": "概念 從數列中挑選一個pivot，大於pivot放在右邊，小於pivot放在左邊，重複循環最後得出的陣列即為排序結果。 流程 (請搭配虛擬碼的QUICKSORT主程式一起服用) 選擇陣列中的一個元素作為pivot 比pivot小的都移到pivot的左邊，比pivot大的都移到pivot的右邊。 對pivot左邊和右邊的兩個陣列分別再做一次QUICKSORT()，形成一個遞迴呼叫。 程式碼 QUICKSORT(A,p,r) 1 if p &lt; r 2 q = PARTITION(A,p,r) 3 QUICKSORT(A,p,q-1)...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Dynamic Programming cheatsheet",
        "url": "https://lukahuang.com/dymamic-programming-cheatsheet/",
        "excerpt": "Problem 1:A manufacturing problem to find the fast way through a factory Problem 2:The matrix-chain multiplication problem Problem 3:LCS LCS程式實作...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Algorithm - 時間複雜度整理",
        "url": "https://lukahuang.com/algorithm-notes-time-complexity/",
        "excerpt": "以下資料摘自Ting的小筆記 ###Sorting Algorithms ###Graph Algorithms | | Graph algorithm 　 | 時間複雜度 | strategy | negative weight | | —-...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Algorithm - 3週不間斷學習演算法之心得",
        "url": "https://lukahuang.com/what-i-learned-after-learning-algorithms/",
        "excerpt": "這個禮拜花了大量的時間研讀演算法，紀錄下學習過程與心得。 清點在這一週中學到了什麼 了解演算法所解決的問題(Problem) 了解各個演算法的解決問題策略與方式。 部分的演算法我能夠以Java來實現。 了解了足夠數量的演算法。 學習演算法的三個階段 看的懂演算法，並且能用真正的程式語言實現出來。 了解演算法，可以利用演算法的特性解決教科書以外的問題。 設計演算法，這部分需要進修另一門課 - 演算法設計。工作或研究上有需求才進修至此階段。 一般學習上到第二個階段就足夠了。也就是說有兩個大方向，一是實現演算法，二是以課本上的演算法為基礎學習其他的演算法。這樣一來就不難聯想，如果我要比別人有優勢，我要： 了解每個演算法所解決的問題。 熟練實現演算法的過程。 了解除了課本上基礎演算法的變形，讓演算法可以適用在更多的場景。 演算法會用到許多的資料結構，學習演算法的同時可以幫助了解資料結構的特性。 沒有學習過演算法的人可能需要花一些時間了解這個演算法怎麼使用，而我可以快速並且更正確的使用它，減少冤枉路。演算法的變形建立於某演算法的特性之上，因此學習演算法的變形可以更了解演算法的特性。 實現(implement)的方式 implement的方式以課本的為主比較好，等到實作出來了以後再看看別人怎麼寫，不然網路上的寫法其實非常多種，令人眼花撩亂，要找到一個符合自己口味的並不是太容易。幸運的找到了一個符合調性的blog也有可能作者用不同的寫法來寫，學習上並不特別效率。自己實作是比較理想的做法，訓練把自己的想法轉變為程式的能力。是個不錯的努力方向。...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Sublime 3 套件整理",
        "url": "https://lukahuang.com/web-tools-sublime-3/",
        "excerpt": "學習網頁一直以來有個困擾，打括號真的是慢到不行，原來sublime這個文字編輯器有許多方便的套件可以用。用簡單的指令就可以架構出一個網站。 先安裝必備的套件管理工具 ConvertToUTF8 ： 解決 Sublime Text 3 預設不支援 Big5 與其他 CJK 編碼的問題 Emmet: 前端工程師必備的擴充套件 ( 參見 http://emmet.io 官網 )...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Bootstrap 學習筆記",
        "url": "https://lukahuang.com/basic-bootstrap-practice/",
        "excerpt": "sublime的套件安裝與使用方式請看這裡 學習 Bootstrap 的幾個重點 學會使用grid system切版。 找相似的範例來練習版面。 練習熟練到可以直接打指令叫出想要的元件。 懂得微調成自己想要的。 了解如何傳值給後端(selector)。 多練習各種不同的版面 儲存成gist 最後練習 build 各種版面來熟練 bootstrap。 學習原則：相同的東西、學一遍就好，然後一個目標一個目標去扎實的達成，相信是最快的方式。 所以直接從3開始學習，看的是 學習資源 Bootstrap...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Meteor專用的Sublime套件：TernJs",
        "url": "https://lukahuang.com/tools-meteor-sublime-suites/",
        "excerpt": "終於安裝好這個Sublime套件了，安裝上有點麻煩，步驟很多，每次用的時候都要設定一下才能用。不過裝好之後爽度還是挺高的 demo影片 github 簡單記錄一下安裝過程 從finder開啟~/Library/Application Support/Sublime Text 3/Packages資料夾 把github上的meteor.js丟進這個資料夾中的TernJS/ternjs/plugin，如果沒有這三個資料夾，就創一個。 打開sublime &gt; project &gt; save project as &gt; 儲存project sublime &gt;...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Javascript Roadtrip 3 Closure",
        "url": "https://lukahuang.com/front-end/javascript-roadtrip-closure/",
        "excerpt": "這一章講的是closure，很奇妙的東西。 JavaScript学习总结(十六)——Javascript闭包（Closure） 這個網站寫的不錯，看來以後要拜讀一下他的文章。 2.1 影片 ￼￼function buildCoveTicketMaker( transport ) { return function ( name ) { alert(\"Here is your transportation...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "CSS Dinner - 好玩又有效的 CSS 教學",
        "url": "https://lukahuang.com/front-end/css-dinner/",
        "excerpt": "CSS Dinner CSS Diner 是一個很有趣的小遊戲，你必須使用css來選取桌上扭動的物體， 全部26關玩完對 CSS selector 想忘也忘不了。 css selector 在 javascript 或是 jQeury 也會用到，不熟的話到時候還是需要花額外的時間加強。 有神人整理成一系列好玩練習效果又顯著的教學，好教學不玩嘛？XD 學習目標 Univeral, Type...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Discover meteor Ch4：Collection",
        "url": "https://lukahuang.com/discover-meteor-ch4-collection/",
        "excerpt": "Collection 新增一個collection collections/posts.js Posts = new Meteor.Collection('posts'); 除了client與server以外的資料夾會在兩者都執行。 所以Posts collection在client和server都可以使用。 這裡的Posts前面不加var，這樣整個app都可以存取到Posts。 git commit -m \"Added a posts collection\" Collection的性質 On...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Discover Meteor Ch5：Routing",
        "url": "https://lukahuang.com/discover-meteor-ch5-routing/",
        "excerpt": "現在要做的事情是點選http://myapp.com/posts/post_id，就可以對應到post的網頁。 加入iron router這個package。 $ mrt add iron-router 知識補充站 Iron Router Not only does it help with routing (setting up paths),...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "星期三搞定一週 88% 工作",
        "url": "https://lukahuang.com/get-things-down-at-wednesday/",
        "excerpt": "Part 1:工作清單以一週為規劃 優點 不需要每天製工作清單，可以節省時間精力。 一年原本365份的工作清單，縮減成52份。 有足足一週可以進行最終的彙整工作，消除「工作未完成」的心理壓力。 可嚴選真正重要的工作：一天的工作量僅為一週的七分之一，審視一週所有的工作，較易依工作重要性決定優先次序。 提昇完成工作的成就感，比幾每天完成小部分工作，一週完成一項中大型工作可獲得較高的成就感。 Part2:一週只有三天，以星期三為最後期限 為工作添加一些限制，像是「一週只有三天」，「星期三是最後的截止期限」這樣絕對可以讓自己以驚人的高效率、迅速完成工作。 因為把工作集中在一個禮拜的前三天完成，這樣高密度的工作下，在經驗中反覆學習改進，自然可以養成高效率、高集中力的工作能力。（p39分析了禮拜中的每一天可能的心態，最後選擇了星期三當做最後期限。） 加班只能星期三 有些企業會將每月或每週的某天，規定為「不得加班的一天」。有「每週有一天絕對不加班」的自我約束，對於減少拖拖拉拉而加班可是相當的有效。 松本幸夫提出的理論是「除了星期三外，一律不加班」才是最佳方式。這個理論應是針對工作上的事務，限制自己一定要在上班時間處理完。這樣下班時間就可以享受、或是學習自己所需要的技能。 如果工作量太大無法實行只有星期三加班，那可以改成實行「每個禮拜的星期四不加班」的方式來解決。 星期三絕對不能延期 在瞬息萬變的時代，若是要求「所有的工作都不得延期」，如此嚴苛的條件相信大家看到都冷汗直流吧。因此在逼不得已的情況下，將工作延期，重新規劃也無訪。但是唯獨在決戰之日星期三這天，就算眼前工作堆積如山，也要以「馬上動手做」取代延期。只要決戰星期三能安然度過，接著就可以以無比輕鬆的心情迎接星期四、星期五和週末。 如何精簡星期三的工作 了解80%即可宣告大功告成的工作 工作並不需要都已100%完成為目標，有些情況下只要完成80%即可宣告大功告成，將時間精力留給其他工作。...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Sitcon workshop：Git 入門到進階與實務經驗談",
        "url": "https://lukahuang.com/sitcon-git-workshop/",
        "excerpt": "Git 入門到進階與實務經驗談 workshop網頁 sitcon這次舉辦的為期五天的workshop 每天不一樣的主題，我參加的有 8/11 Git 入門到進階與實務經驗談 8/14 那些學校沒教的黑魔法攻防 8/15 學習設計：從一個網站的設計開始 這是第一天 Git workshop 的學習筆記 主講人:Denny 投影片: 連結 第零部分：前置設定...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "jQuery Return Flight Ch1 ( 1 )：Ajax Basics",
        "url": "https://lukahuang.com/javascript-return-flight/",
        "excerpt": "這是之前在try jQuery做過的例子。 之前我們只能顯示localhost的圖片，現在我們要從server載圖片下來，並顯示之。 接下來來完成我們第一個Ajax程式。 $('.confirmation').on('click', 'button', function(){ $.ajax('http://example.org/confirmation.html', { success: function(response) { $('.ticket').html(response).slideDown(); } }); }); 使用Ajax回傳的網頁並不是完整的網頁，而是只有局部更新。 &lt;div&gt; ... &lt;strong&gt;Boarding...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Ruby bits ( 1 ) : Expression",
        "url": "https://lukahuang.com/ruby-bits-1-expression/",
        "excerpt": "Unless Unless is more intuitive 用 unless 代替 if! 更加直覺 Unless with else is confusing unless 和 else 一起用的時候令人困惑 NIL...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Ruby bits ( 2 ) : Methods and Classes",
        "url": "https://lukahuang.com/ruby-bits-2-methods-and-classes/",
        "excerpt": "Hash Argument 每一個不同的欄位就多一個 argument不是個好方法，會造成很多欄位空在那邊。 用 Hash argument 來解決這個問題。 使用方法，因為 hash 是由 key-value 所組成，所以可以把需要的屬性設成 symbol ，也就是:lat這種樣子。後面指定它的 value，形成 key-value 的形式。 改寫成 1.9...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Ruby bits ( 3 )：Class",
        "url": "https://lukahuang.com/ruby-bits-3-class/",
        "excerpt": "上一個禮拜想要嘗試更多的動手記憶，經過實驗證明，還是需要筆記的輔助反覆記憶會比較好。經過這次的練習之後會更注重學習本身的強度。 ENCAPSULATION封裝 跟物件本身有關的method，使用class會比使用許多的method來的好。 VISIBILITY 有一些method你並不想給外面的人直接使用他，那麼宣告成private，限制這些private method不能給外面的人所使用。 class User def up_vote(friend) bump_karma friend.bump_karma end protected def bump_karma puts \"karma up for...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Ruby bits ( 4 )：ActiveSupport",
        "url": "https://lukahuang.com/ruby-bits-4-active-support/",
        "excerpt": "install it and load it install it gem install activesupport gem install i18n load it require ‘active_support/all’ core extensions: array...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Ruby bits ( 5 )：Modules",
        "url": "https://lukahuang.com/ruby-bits-5-modules/",
        "excerpt": "Ruby bits的課程真的很不錯，講到的主題都是很重要的東西。有點相見恨晚的感覺，趕快把它做完吧! 本節學習目標 module activesupport ::Concern 了解self的意義 part1: module class method與instance method use extend to expose methods as class method...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Ruby bits ( 6 )：Blocks 學習筆記",
        "url": "https://lukahuang.com/ruby-bits-6-blocks/",
        "excerpt": "不得不再說一次，這些主題都超級重要，不先學Ruby直接學Rails感覺很卡。果然要從基礎開始打才是王道。在看這篇之前請先看完method / block / yield / Proc / lambda，很多觀念都是從這邊的延伸。 conventions block有兩種表達方式 single block braces if the block is a single...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Ruby bits 2 ( 1 )：BLOCKS, PROCS & LAMBDAS",
        "url": "https://lukahuang.com/ruby-bits_2-1-blocks-procs/",
        "excerpt": "雖然跟Ruby bit名字很像，但是內容的確比較進階點。 two ways for storing blocks 1.Proc my_proc = Proc.new do puts \"tweet\" end my_proc.call # =&gt; tweet 等同於...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "EDX Linux Foundation Ch 8：Filesystem",
        "url": "https://lukahuang.com/edx-linux-foundation-ch-8-filesystem/",
        "excerpt": "File system Mount File system table If you want it to be automatically available every time the system starts up,...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "EDX Linux Foundation Ch 9：User Environment Section 1 Account",
        "url": "https://lukahuang.com/edx-linux-foundation-ch-9/",
        "excerpt": "Section 1 Account 1. Identifying the Current User who To list the currently logged-on users, type who whoami To identify...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "EDX Linux Foundation Ch 9：User Environment Section 2 Environment Variables",
        "url": "https://lukahuang.com/edx-linux-foundation-ch-9-environment-variable/",
        "excerpt": "##Environment Variables Environment variables are simply named quantities that have specific values and are understood by the command shell, such...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "EDX Linux Foundation Ch 9：User Environment Section 3 and 4",
        "url": "https://lukahuang.com/edx-linux-foundation-ch-9-user-environment-section-3-recalling-previous-commands/",
        "excerpt": "Section 3:Recalling Previous Commands Up and Down you can recall previously used commands simply by using the Up and Down...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "EDX Linux Foundation Ch 9：User Environment Section 5 File Permissions",
        "url": "https://lukahuang.com/edx-linux-foundation-ch-9-user-environment-section-5-file-permissions/",
        "excerpt": "File Ownership 0.File Permission Modes rwx: rwx: rwx u: g: o rwx Files have three kinds of permissions: read (r),...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "EDX Linux Foundation Ch10：Text Editor",
        "url": "https://lukahuang.com/edx-linux-foundation-ch10text-editor/",
        "excerpt": "本週比較輕鬆，介紹的是Text Editor，但是我卻從中得到很多收穫。課程中介紹了Vim和Emacs，話說這是我第一次聽到Emacs這個編輯器，但他卻是原生的linux編輯器。而且還有不少的愛用者，開發效率也不輸Vim！ ( 以下內容大部分由Carl大哥所分享，加上我的心得所寫而成。 ) Vim VIM Adventures http://vim-adventures.com/ 初學Vim的好遊戲，強迫你要用Vim指令來解謎破關XD Vim 正體中文社團 https://www.facebook.com/groups/vim.tw/ 有很多的Vim資源、套件。 Best Vim Tips http://vim.wikia.com/wiki/Best_Vim_Tips Vimgenius http://www.vimgenius.com/...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Vim 學習筆記",
        "url": "https://lukahuang.com/vim-learning-notes/",
        "excerpt": "常用指令筆記 第一課： 使用hjkl控制上下左右 第二課： 使用w e b跳躍單字 第三課： 使用dd剪下一行，並使用p或P貼上。 第三課：移動 跳至某一行 :第幾行 跳至段落{或} 跳至句首$ 跳至句尾0 跳至某行： 第四課：畫面捲動 page down: page...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Agile Meetup 2014 9月：More with LeSS",
        "url": "https://lukahuang.com/agile-meetup-2014-september-more-with-less-to-participate-in-experiences/",
        "excerpt": "這是第三次參加agile meetup，真的很感謝scrum community舉辦這麼這麼有優質又免費的活動。 今天的主題LeSS在講的是Large-Scale Scrum，也就是大型的scrum組織如何協同合作。 每一個小team都要正確的執行scrum，否則team的數量一多更容易崩壞。 今天提到的scrum原則 每個團隊成員都有責任管理自己 scaling itegration 每個人都不斷的提交(commit)，一天提交2~5次是不夠的，最好可以每小時都commit。 在backlog中刪除不必要的功能 resource pool是不可行的方式 resource pool指的是誰有空誰就被抓去組成一個團隊來處理新的專案，因為每次成立新的團隊就要一段磨和期，無形間浪費了很多的產能。一個scrum team組成三年以上都有可能再度成長。 feature team與component team...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Agile Meetup 2014 9月：喚醒者的工具箱",
        "url": "https://lukahuang.com/agile-meetup-2014-in-september/",
        "excerpt": "Part1:當一個好的教練！ 如何讓一個二十幾年沒運動的阿宅學會打球 一個網球教練如何讓一個二十幾年沒出門運動的宅女學會打球，答案是沒有太多的技巧，沒有標準的動作，當場示範怎麼打網球，然後把球丟給那個宅宅，阿宅揮空幾次以後，發現真的打的到了！證明學習的最好方法不是看書，而是用本能來適應。 Try error 嘗試錯誤 人類的腦子分為兩個部分，其中腦幹會想保護自己。 先讓人專注之後，保護自己的機制就會降低 一旦降低了自己的恐懼感，便增加awareness。 learning the hard way 自己跌倒才會學到 Part2:營銷 訊息爆炸的時代如何讓別人知道自己的產品，關鍵是這事情是否令人所印象深刻（markable），製造一些話題，會有不錯的效果（紫牛效應）。 一個例子-雕爺牛楠 找美食家來試吃，每個月淘汰兩道菜，增加兩道菜，製造話題 1.理解鐵桿粉絲真正想要需要什麼 2.墨守成歸是風險最大的作法...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "EDX Linux Foundation Ch11：Local Security Principle section 1~3",
        "url": "https://lukahuang.com/edx-linux-foundation-ch11-understanding-linux-security/",
        "excerpt": "Section 1 Understanding Linux Security 使用者權限的管理在個人電腦上可以放輕鬆使用，但如果是多人共用的電腦，就必須限制的嚴格，最好只給用戶他所可以用的權限就好，不要多給，本章將會以最嚴格的標準來說明如何管理使用者的權限以增加安全性。 User Accounts For each user, the following seven fields are maintained in the /etc/passwd...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "EDX Linux Foundation Ch11：Local Security Principle section 4~5",
        "url": "https://lukahuang.com/edx-linux-foundation-ch11-local-security-principle-section-45/",
        "excerpt": "Section 4: Working with passwords How Passwords are Stored On modern systems, passwords are actually stored in an encrypted format...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Personal Kanban：能夠用在自己身上的敏捷方法 學習筆記",
        "url": "https://lukahuang.com/personal-kanban/",
        "excerpt": "如何將敏捷方法用在個人身上? 符合敏捷精神 Agile 因為Scrum需要角色的區分，所以對個人來說，並不需要使用Scrum，只要符合敏捷精神即可。 「個人看板系統」Personal Kanban 偶然發現這個真的是太酷了，一直在尋找可以管理自己的敏捷方法。在今天終於找到了答案。Personal Kanban可以讓自己看見自己的問題。看到自己問題之後便能夠做出調整，持續改善，增加產能。這也是敏捷方法的精神，透過敏捷方法改善單位時間的產能，避免低效率的加班，如此一來有更多的時間休息、散心，有更多的時間學習新的知識，形成正向循環。 實行Personal Kanban三步驟 visualize(視覺化)：把你手頭的工作用流程畫出來 Limit Work-in-progress（限制WIP)：依據利特爾調整進行中工作的數量。 Manage flow（管理工作流)：透過反省、分析最佳化你的工作，這是最有價值的部分。 步驟1: 視覺化 把手頭上的工作畫成你的第一個看板。 因為看的到所以知道 我漏了什麼？...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "EDX Linux Foundation Ch12：Network",
        "url": "https://lukahuang.com/edx-linux-foundation-ch12-network/",
        "excerpt": "IP and package IP(Internet Protocol) address is essential for routing packets of information through the network.These packets contain data buffers...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "EDX Linux Foundation 補充筆記",
        "url": "https://lukahuang.com/edx-linux-foundation-to-add-notes/",
        "excerpt": "七層筆記＋tcp/ip筆記 ip mac socket 基本知識 乙太網路 了解封包內容 名詞釐清 IEEE 國際上專業制定單位的組織 LAN (LOCAL AREA NETWORK) 區域網路 WAN (WIDE AREA NETWORK) 廣域網路...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Techdays Videos 釋出",
        "url": "https://lukahuang.com/techday-videos/",
        "excerpt": "門票要價15000的techday影片釋出了 蒐集了幾個比較有興趣的影片，分別是: 保哥的 使用 TypeScript 開發大型應用程式 幾個敏捷開發的經驗分享: Kanban 看板及 Lean 精實的技巧在大型軟體開發專案 現代化網站開發技巧應用實例 Modern Web Development Practices 從版本管控到持續整合 (Continuous Integration, CI)...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Sinatra 初體驗(1) - Route",
        "url": "https://lukahuang.com/try-sinatra-01-route/",
        "excerpt": "First Sinatra App 輸入gem install sinatra安裝gem 建立app.rb檔 require \"sinatra/base\" class App &lt; Sinatra::Base get '/' do \"Hello World!!\" end end...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Sinatra 初體驗(2) template與layout",
        "url": "https://lukahuang.com/try-sinatra-02/",
        "excerpt": "第一次使用Sinatra，還滿好玩的。 只要輸入gem install sinatra安裝 之後在ruby檔中require \"sinatra/base\"就可以使用了 each_with_index 原來要使用each_with_index來取出index，我還在想說沒有i怎麼用＠＠ &lt;% @images.each_with_index do |image, index| %&gt; &lt;h2&gt;&lt;a href=\"/images/&lt;%= index %&gt;\"&gt;&lt;%= image[:title] %&gt;&lt;/a&gt;&lt;/h2&gt;...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "jQuery Return Flight Ch1 ( 2 )：補充筆記",
        "url": "https://lukahuang.com/jquery-return-flight-1-ajax-basics/",
        "excerpt": "使用.html()插入元素 要使用的ajax長這樣，點下#tour之下的button後，如果出現錯誤，就會顯示錯誤訊息。 $(document).ready(function() { var el = $(\"#tour\"); el.on(\"click\", \"button\", function() { $.ajax('/photos.html', { data: {location: el.data('location')}, success: function(response) {...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "jQuery Returm Flight Ch2：Javascript Object & Function",
        "url": "https://lukahuang.com/jquery-return-flight-2/",
        "excerpt": "Part 1. javascript Object 將改原本的程式重構，所有的function都變成Object的Method，增加可讀性。 這是原本的code var confirmation = { init: function() { $('.confirmation').on('click', 'button', function() { $.ajax('confirmation.html', { ......",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "EDX Linux Foundation Ch13 Manipulating Text",
        "url": "https://lukahuang.com/edx-linux-foundation-ch12-text/",
        "excerpt": "Section 1 cat and echo cat(concatenate) cat file 顯示檔案，按空白鍵可以捲動 cat file1 file2 把file1和file2接起來顯示 cat file1 file2 &gt; newfile 把file1和file2接起來並且存成newfile。 cat...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "jQuery Return Flight Ch4：Utility Methods",
        "url": "https://lukahuang.com/jquery-return-flight-4/",
        "excerpt": "each 用each把result的物件讀出來，插入頁面元素之中。 要插入&lt;p&gt;&lt;/p&gt;之中使用的是html() 要插入img的src欄位，使用find('img').attr('src', city.image) 之前也有使用過attr()這個方法來找到data欄位。 success: function(result){ $.each(result, function(index, city) { var favorite = $('.favorite-'+index); favorite.find('p').html(city.name); favorite.find('img') .attr('src', city.image);...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "jQuery Return Flight Ch5 ( 1 )：Advanced Event",
        "url": "https://lukahuang.com/jquery-return-flight-5-jquery-plugins/",
        "excerpt": "advanced event handler trigger 使用trigger就像是你按下那個按鈕。範例: function picture() { console.log('Show Plane'); } function status() { console.log('In Service'); } function zoom() {...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "EDX Linux Foundation Ch15：Shell Script ( Ch14跳過 )",
        "url": "https://lukahuang.com/edx-linux-foundation-ch15shell-script/",
        "excerpt": "這是參加開源社群Tossug Linux讀書會的心得筆記，部分內容經過大大的補充，讓學習上更完整:） Ch14講的是Printer，因為實際使用上較多Bug所以跳過這一章節，等有需要的時候再來學習。 Shell linux系統可分為三個重要的部份： 1.kernel 2.shell 3.application 因為kernel的部份太過低階，所以需要透過一個友善介面(interface)來讓使用者操作的時候更為方便，這個介面便是shell。涵蓋範圍包括但不限於： CLI (Command line interface) GUI (Graphical user interface) 常見的CLI有以下幾種。 sh是最古老的shell，大部分的linux系統使用上sh時，會直接使用其他shell的對應功能來取代，所以使用時需特別注意，就算語法是sh，其實實際上運作的是bash或者其他的shell如zsh…等等。 csh...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Atom 防止 Snippet Package 更新",
        "url": "https://lukahuang.com/atom-prevent-snippet-package-updates/",
        "excerpt": "使用 Snippet 最重要的針對自己的習慣客製化快捷鍵。 Atom 有許多內建的 Snippet，建議「不要」使用，因為那些設定會存在「Atom 程式」裡面，無法儲存在 .atom 資料夾中。所以一旦 Atom 版本更新之後，全部的設定都會不見。如果要使用 Snippet 請使用 Package 安裝，這樣用 git 來控管 .atom 資料夾時，就不會發生意外，全部的修改都能由 git...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Rails Project 1 URL Shortener",
        "url": "https://lukahuang.com/rails-project-1-url-shorter/",
        "excerpt": "前言 接下來我要藉由實作一些比較小型的Rails Project，來練習工程師必備的技能，其中最主要訓練的目標是能抓出需要實作的use case與如何從use case中實踐功能。因為沒有網頁的相關背景，如何磨練Html css javascript的基本實作能力也是這一階段的重點。 熟悉了如何使用Rails完成所要的需求與一些常見功能的開發之後，下一階段可以是學習Rails如何跟API互動或是開始學習Design Patterns。學習Dessign Pattern的原因有：一是可以讀的懂程式碼，二是了解為什麼要這麼寫。anyway，先把眼前的事情做好最重要let’s do it！ Use Case , Page Flow and Data 在練習實作Project的過程中，我會格外地注意Use...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Atom 常用快速鍵",
        "url": "https://lukahuang.com/atom-shortcuts/",
        "excerpt": "Sublime 快速鍵 Sublime有的快速鍵Atom幾乎都有，以下是我有在使用的一些快速鍵。 基本的移動與選取 游標移至行頭/行尾 cmd + 左 / 右 跳到頁首頁尾 cmd + 上 或 下 游標移至上個單字 / 下個單字 option...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Rails note : Require Creator",
        "url": "https://lukahuang.com/rails-note-require-creator/",
        "excerpt": "增加一個叫做Creator的別名，讓我們在判別作者時文意更加通順。 設定發文者 我們透過foreign key新增一個叫做creator的別名。作法是修改model/post.rb原本的 belongs_to :user 改成 belongs_to :creator, foreign_key: \"user_id\", class: \"User\" 原本我們要使用post.user來取得文章作者，現在可以使用post.creator來取得作者。 只有作者可以新增或修改文章 到posts controller加上before_action :require_creator, only: [:edit,...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Rails - 拆解 Form Helper 以 Checkbox 為例",
        "url": "https://lukahuang.com/rails-form-helper/",
        "excerpt": "使用Rails Form Helper時，很重要的一點是要知道Form Helper會產生什麼樣的Html Code，了解之，觀察之，這樣你才能修改成自己需要的樣子。如果要在form中加入check box，可以使用collection_check_boxes這個在rails 4新加入的form helper來完成。我們就以checkbox為例，來練習觀察html吧！ Collection Check Box 第一個來使用到的是collection_check_boxes，完整的參數是collection_check_boxes(object, method, collection, value_method, text_method, options = {}, html_options...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Atom 套件整理",
        "url": "https://lukahuang.com/atom-kit-recommended/",
        "excerpt": "atom-color-highlight 在編輯器中即時顯示色碼對應的顏色。 atom-development-server 一個很強大的東西，自己玩玩看吧。 atom-html-preview 老實說我不太會用這個套件，但是很多人下載，我就跟著下載了＠＠ autocomplete-plus 可以即時提示可用snippet或是路徑的套件。 autocomplete-snippets 搭配autocomplete-plus可以提示套件內的內容。懶人可以多多使用，爽度很高。 bootstrap3-snippets 我所使用的bootstrap3-snippet color-picker 顏色選擇器 docblockr 很好用的加強comment的套件，在block comment中按下enter就會自動多加個星號。很方便。建立block comment的快捷鍵是/**加上tab。 emmet 這就不用多做介紹了，網頁工程師必裝套件，如果不太清楚的話請google一下有很多介紹的好文。值得注意的是我會將預設的tab鍵改成慣用的按鍵，以免與snipppet相衝。...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "排版練習1：PSD to HTML Porfolio",
        "url": "https://lukahuang.com/psd-to-html-porfolio/",
        "excerpt": "最近在訓練排版的熟練度，要快速打造protype基本的前端技能是必須的。我選擇的教材是tuts的psd to html porfolio。課程中介紹了詳細的切版流程，從切圖到建構html到用css排版都有詳細的介紹。本篇是psd to html也就是排版練習第一篇，練習的是使用純css來刻網站。接下來會練習更多題目，直到我掌握基本的排版技巧為止。 photoshop基本操作 psd to html 顧名思義就是把設計師做好的 photoshop 檔案，用 html 和 css 刻成網頁。這個練習很棒的地方就是模擬了一個設計師跟你合作。所以首先你的電腦裡需要安裝photoshop。我使用的是photoshop cc 2014版本。 測量元素距離...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "排版練習2：PSD to html with Bootstrap",
        "url": "https://lukahuang.com/psd-to-html-with-bootstrap/",
        "excerpt": "第二個練習一樣學習tuts的課程，選擇課程的好處是做到一半不知道該怎麼做時，有video解答可以看。看看高手怎麼做總是比自己亂弄的好的多。我選擇的課程是需要付費的，tuts還有一些免費的教材可以學習，影片或是文章教學都有，有興趣的自己發掘囉。第二個練習跟第一個練習不同之處在於本練習會使用bootstrap的grid system來排版，並且icon與logo會使用sprite css的方式來製作。 Sprite sheets sprite 說的是利用將 icon 集中在一張圖片上，藉由CSS設定不同顯示區域，來實現每一個不同的icon。這樣的好處是很可降低圖片request數，減少server負擔。現在我們要使用sprite的方法實作的是右上角的五個social-icon和左上角的mumbo logo。 Create Sprite Sheets 首先在photoshop中用方框工具圈選5個icon 點選file &gt; copy merge複製五個icon file &gt;...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "保哥 javascript 實戰課程筆記",
        "url": "https://lukahuang.com/bogut-javascript-practical-notes/",
        "excerpt": "javascript 語言特性 javascript是個動態型別語言，無法在開發期間宣告型別，意味著javascript的單一變數可能會隨時改變型別! javascript是個弱型別的語言：意味著在開發時期無法指定javascript型別。只能在執行期間檢查型別。如果真的要知道這個變數的型態，只能在執行時透過typeof的方式將該變數目前的型別使用字串顯示。 javascript是個物件導向程式語言，除了五種 primitive type 以外其他都是物件。這部份會在下一節詳細的說明。 javascript 是個物件導向程式語言 這節會從javascript是物件導向語言這個觀點延伸了解javascript的型別(type)。 除了數值(number) 字串(string) 布林(boolean) null undefined 這五個是原始型別(Primitive Type)外，所有的東西都是物件。 (引用自Are You...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Ajax 學習筆記",
        "url": "https://lukahuang.com/ajax/",
        "excerpt": "ajax 如何運作？ Ajax 立基於非同步 JavaScript 和 XML。簡單地說，Ajax 即運用非標準的XMLHttpRequest物件，並配合伺服器端的 Script 進行通訊。 Ajax 能夠傳送並接收各種格式的資訊，其中包括 XML、HTML 和 text 檔案。 Ajax 最吸引人之處在於它的〝非同步〞性質，這意味著 Ajax 能做各種動作，而無須更新整個頁面。如此便能透過使用者的事件更新頁面的一小部分。...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "javascript核心筆記：Object",
        "url": "https://lukahuang.com/javascript-core-note/",
        "excerpt": "在 JavaScript 中，物件是 Object 的實例。你可以如下建立一個新的物件： var obj = new Object(); 實際上，現在已經很少人這麼撰寫了，使用物件實字（Object literal）語法就可以建立一個物件： var obj = {}; 上面你所看到的函式撰寫方式，稱之為函式實字（Function literal），這就像你寫下一個數值實字、物件實字或陣列實字，會產生數值或物件等： 搜尋物件上的特性 想要知道物件上有哪些自定義特性，可以使用...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Javascript核心筆記：this",
        "url": "https://lukahuang.com/javascript-this/",
        "excerpt": "call可以讓你決定this的參考對象 在 JavaScript 中，函式是 Function 的實例，Function 都會有個 call 方法，可以讓你決定 this 的參考對象。舉例來說，你可以如下呼叫： function toString(){ return '[' + this.name + ',' +...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Javascript核心筆記：callback",
        "url": "https://lukahuang.com/javascript-core-note-callback/",
        "excerpt": "callback是一種設計模式 來看看callback的定義： Callback (computer programming) - Wikipedia In computer programming, a callback is a reference to a piece of executable...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Javascript核心筆記：function ",
        "url": "https://lukahuang.com/javascript-core-note-function/",
        "excerpt": "javascript的函數是一級物件(First-Class) function是由Function的實例，並且在javascript中可以指定給變數，函式與數值的地位相同，並不會像有些語言中，無法像數值一樣地被指定，不會淪為二等公民，因此，對於支持函式可如數值一樣指定給變數的語言，我們稱函式在這個語言中是一級函數。 var number = 10; // Number literal var obj = {x : 10}; // Object literal var array...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Javascript核心筆記：scope ",
        "url": "https://lukahuang.com/javascript-core-note-scope/",
        "excerpt": "Scope 每個function在呼叫時都會建立新的 Function execution context，有個物件用來代表 Execution context，而區域變數則是 context 物件上的特性。 JavaScript 在查找變數時，會先在目前 context 物件上找，若找不到指定名稱，則會到外層 context 物件上找，若找不到，就再到更外層 context 物件找，直到全域物件為止，這樣的順序形成變數查找的 Scope chain。 closure是典型應用scope...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Javascript核心筆記：建構式與prototype",
        "url": "https://lukahuang.com/javascript-core-note-constructor/",
        "excerpt": "建立物件時，實際上做了什麼事? 使用 new 關鍵字時，JavaScript 會先建立一個空物件，接著設定物件的原型為函式的 prototype 特性所參考的物件，然後呼叫建構式並將所建立的空物件設為 this。接下來依照建構式設定實例上的特性，最後再由prototype補上未設定的特性。 建構式如何初始化實例 var p1 = new Person('Justin', 35); var p2 = new Person('Monica',...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Javascript核心筆記：namespace",
        "url": "https://lukahuang.com/javascript-core-note-namespace/",
        "excerpt": "靜態命名空間 方法1 - 直接指定 var myApp = {} myApp.id = 0; myApp.next = function() { return myApp.id++; } myApp.reset =...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Typescript是新手的好朋友",
        "url": "https://lukahuang.com/typescript-is-newbies-good-friend/",
        "excerpt": "為什麼 Typescript 是新手的好朋友 typescript百分之百跟javascript相容，所有javascript的語法都可以在.tstypescript檔案中執行。因此就算是要javascrtip新手，也可以享受typescript帶來好處。typescript能夠讓 目前暫時不需要去研究typescript的其他功能，只需要他可以宣告型態，靜態語言即時偵錯，與關連定義檔就可以檢查method，光是這幾項就很值得使用了 需要注意的是因為typescript的許多特性，例如: class, module, interface 皆與原生javascript有所不同，如果對javascript還不了解，直接學習可能會更加的混淆。 在javascript演進這麼快速的現在，要選擇任何一種framework或是語言都是一種巨大的投資， 選擇 Typescript 還有什麼好處？ 因為javascript的是個動態型別的語言，所以只能在執行時期偵錯，要真的執行到那一行，才會跳出錯誤訊息，這使的偵錯上非常的不容易。 typescript所能解決的問題：因為typescript提供了靜態型別檢查，在編譯的時候就可以檢查到！尤其是打錯字的問題和型別不一致的問題。 typescript新增了一些型別，讓我們可以宣告靜態型別。也保留了原本動態型別的特性，只要你設為any！。 function 也可以使用冒號設定回傳值。 module...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "細讀 Bootstrap 3 文件",
        "url": "https://lukahuang.com/bootstrap-note-preface-cheetsheet/",
        "excerpt": "使用Bootstrap好一段時間了，卻沒有好好的把官方文件讀過一遍，雖然寫的出來但是速度不盡理想，所以這兩天花些時間將幾個不太理解的常用元件與一些以前有使用到卻不太了解的data-attribute用法寫下筆記，好提高生產力。 Part 1: Navbar 這是一個bootstrap官網上的完整navbar範例。 &lt;nav class=\"navbar navbar-default|navbar-inverse\"&gt; &lt;div class=\"container-fluid\"&gt; &lt;!-- Brand and toggle get grouped for better mobile display...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "SASS 的 @import @mixin @content @extend 與 @function",
        "url": "https://lukahuang.com/sass/",
        "excerpt": "1.Import SASS在檔名前面加上底線時，不會直接編譯成CSS，使用@import引入後，才會編譯。 2. Mixins 常見的mixin作法，要傳入的引數前面需加上$字號。 /* Mixins */ @mixin border-radius($radius: 10px) { -webkit-border-radius: $radius; -moz-border-radius: $radius; border-radius: $radius; } @mixin...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "使用 SMACSS 製作button",
        "url": "https://lukahuang.com/making-a-button-by-using-sass/",
        "excerpt": "module抽離出常用元件，負責大致的外觀 SMACSS是Jonathan Snook所發表的一個CSS/SASS的設計模式。在製作button時我們會把它放在module資料夾底下，並存成檔名為_btn.scss。在modules資料夾中的_btn.scss裡面撰寫Button的外觀，需要注意的是不包含顏色和其他特效。這樣是為了將顏色和細部調整放到之後的_theme.scss檔案中做調整。為什麼要這樣做呢？這樣做可以在有多個佈景主題的時候很方便的切換。也比較知道現在在這個檔案我要做哪些事情。不會一堆css碼做了什麼事情要一一去解讀。 modules/_btn.scss負責大致上的外觀 .btn { display: inline-block; height: 3rem; padding: 0 1rem; outline: none; border: 1px solid; font-size: 1.125rem;...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "練習：使用SASS開發Portfolio (1) Header 與 Footer",
        "url": "https://lukahuang.com/psd-to-html-practice-using-sass-development-portfolio/",
        "excerpt": "標題列(Header) 固定的標題 往下捲動時仍然會固定在上方 幫header加上position: fixed可以做到這個效果。透明的效果則是使用background: rgba(0, 0, 0, 0.8)。 標題列的水平置中 這邊使用的水平置中技巧是使用CSS 垂直置中的3種方法中的設定行高(line-height)的方法。 而行高我們可以在_typography.scss中統一設置，typography.scss顧名思義就是用來處理一些排版的問題，常見的設定有body、anchor、paragraph和header等等常用到的東西。如果沒有使用scss的習慣，可以利用註解區隔出一個專門處理排版的區域。 body { color: $color-text; font: $body-font-size~\"/\"$baseline $body-font;...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Ruby中冒號開頭Symbol與&:to_s用法解釋",
        "url": "https://lukahuang.com/ruby-colons-at-the-beginning-of-the-variable-symbol/",
        "excerpt": "本篇介紹Ruby中特有的寫法，將解答&amp;:to_s和:symbol這兩種寫法的意義。並依序介紹以下議題： Symbol和String的不同之處 分別宣告兩個symbol與string。 [22] pry(main)&gt; sym = :abc =&gt; :abc [23] pry(main)&gt; str = \"abc\" =&gt; \"abc\" [24] pry(main)&gt; sym2...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Atom殺手級套件介紹",
        "url": "https://lukahuang.com/introduce-atoms-killer-packages/",
        "excerpt": "這次來介紹兩個殺手級套件，以及其他的輔助的畫面跳躍套件來完善atom快速鍵不足的地方。 jumpy 運用他你可以快速的跳躍到畫面中程式的任何一個地方，只需按下shift + enter。 如果你使用atom-Material-UI這個套件的話可能畫面會變得像這樣。 這時候在選單列選擇 atom &gt; open your style sheet，加入以下內容，即可改善。 atom-text-editor::shadow .jumpy { &amp;.label { opacity: 0.75;...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "HTTP Status Code In Rails",
        "url": "https://lukahuang.com/http-status-code-in-rails/",
        "excerpt": "Rails將這些HTTP Status定義成有意義的單字。讓我們可以在使用的時候減少因為背錯而發生錯誤的機率。 使用方式 用symbol加上單字即可取代原本的HTTP Status Code(500) render status: 500 render status: :forbidden 這些Symbol其實定義在Rack中 原始碼 rack/utils.rb HTTP_STATUS_CODES = { # Informational...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Demo：使用Matirialize框架實現視差滾動",
        "url": "https://lukahuang.com/practice-using-the-matirialize-framework-parallax-scrolling/",
        "excerpt": "完成品展示頁 Materialize 是除了 Bootstrap 以外現今相當熱門的前端框架，可以製作的網頁類型相當廣泛，未來將使用 Materialize 來開發一些小作品，是今天練習的主要目的。 實現Materialize框架提供的視差滾動效果 視差滾動的效果由materialize提供的Parallax JS 套件來完成，效果可以讓圖片滿板，並且有視差效果。步驟如下： 自行撰寫.parallax-container包覆需要跟圖片有視差效果的區域。 第二層的最下方加上.parallax並包覆圖片即可完成視差效果。 &lt;section class=\"slogan-section margin-bottom parallax-container valign-wrapper \"&gt; &lt;div...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "使用Github展示靜態網頁",
        "url": "https://lukahuang.com/use-github-show-static-pages/",
        "excerpt": "這篇很簡短，但還是筆記一下怎麼用，因為網路上找的資料有點繁雜。\n\n原理\n\ngithub的gh-pages分支可以用來展示靜態網頁，推上去就可以正確展示了。\n\n步驟\n\n\n  建立新的branchgit branch gh-pages\n  推上githubgit push origin gh-pages\n  需要注意的是首頁要命名為index.html\n  到[github name].github.io/[repository name]網址查看，你的網頁已經展示在這個網址。\n\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Landing Page 實作：來做個簡單的Jumbotron",
        "url": "https://lukahuang.com/dynamic-landing-page-1-jumbotron-make/",
        "excerpt": "製作jumbotron有兩個重點 垂直置中 設定背景。 Background 設定position: center bottom讓圖片顯示出需要的區塊 使用background-size: cover;讓圖片滿版 section.intro{ padding: $baseline * 2; background-image: url('../images/intro-bg.jpg') ; background-position: center bottom;...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Demo：使用scrollspy讓畫面更生動",
        "url": "https://lukahuang.com/landing-page-implements-a/",
        "excerpt": "Demo展示頁 作法說明 1.幫body加工 將body加上display: relative，如果還是不行使用的話加上width: 100%與height: 100%。 display: relative; width: 100%; height: 100%; 2. 宣告navbar並設定target 使用js宣告target，這次我使用的target是整個navbar，用.navbar-custom來指定之，有需要的話可以調整offset修正navbar的觸發情形。 $(document).ready(function(){ $(\"body\").scrollspy({ target: \".navbar-custom\",...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Demo：實作捲動觸發CSS動畫",
        "url": "https://lukahuang.com/demo-implemented-scrolling-trigger-the-css-animation/",
        "excerpt": "demo 第一部分：使用CSS撰寫Slide In效果 這個單元使用的技巧有： 使用transition讓屬性值改變時有動畫的效果 使用animation-fill-mode設定結束狀態 使用transform:translate移動元素 1. 使用transition讓屬性值改變時有動畫的效果 transition 可以將CSS改變的過程變成動畫。詳細玩一下CSS3 Transitions就懂了。 2. 使用animation-fill-mode設定結束狀態 animation-fill-mode 結束後的狀態 none：默认值。不设置对象动画之外的状态 forwards：结束后保持动画结束时的状态，但当animation-direction为0，则动画不执行，持续保持动画开始时的状态 backwards：结束后返回动画开始时的状态 both：结束后可遵循forwards和backwards两个规则。...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Demo：使用wow.js快速打造捲動式動畫網頁",
        "url": "https://lukahuang.com/use-wowjs-to-quickly-create-scrolling-animation/",
        "excerpt": "我用兩個不同方法個別製作出網站來讓大家比較看看： 純CSS打造捲動式動畫網站 wow.js打造的捲動式動畫網站 接著來介紹這wowjs的製作方法與其優缺點。 使用方法： 第一步要做的是animate.css與wow.js載進網頁中。接著幫要使用動畫的部份加上.wow .animate動畫名稱屬性。wow.js用來負責偵測捲動到的位置，animate.css用來決定呈現的動畫。 HTML &lt;section class=\"wow slideInLeft\"&gt;&lt;/section&gt; &lt;section class=\"wow slideInRight\"&gt;&lt;/section&gt; JavaScript new WOW().init(); 就是這麼簡單。還有其他客製化的設定，不過彈性也不大，使用最基本的功能cp值最高。 跟手工打造的CSS動畫的不同 wow.js...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "從 Tealeaf 課程學習模組化 - Sluggify Module",
        "url": "https://lukahuang.com/tealeaf-course-2-sluggify-module/",
        "excerpt": "因為 Post 與 Category 都的網址都需要 Sluggify 以便 SEO 的進行。所以我們把 Sluggify 模組化，讓同樣的程式碼只要寫一次就好。 1. 建立module Sluggable，並引入之 在lib資料夾中建立一個名為sluggable.rb的檔案。加入extend ActiveSupport::Concern，這個技巧會讓模組間的耦合變得更加簡單。而一個class載入Sluggable時，會先做完include區塊中寫下的事情。 module Sluggable extend ActiveSupport:Concern...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Rails - 使用 will pagniate 搭配 ajax 實作無限捲動",
        "url": "https://lukahuang.com/rails-will-pagniate-implement-an-infinite-scroll/",
        "excerpt": "概念： will paganiate 由送到 controller 的 params[:page] 決定回傳的@posts。 可以由我們在 controller 中定義@posts所知道。 @posts = Post.paginate(:page =&gt; params[:page]) inifite scroll event $(window).scroll(function...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Rails - Sortable Table With Ajax",
        "url": "https://lukahuang.com/rails-sortable-table-with-ajax/",
        "excerpt": "前端使用sortable 後端在幫要排序的類別(這邊是Memo)加上position欄位 原理與流程 jquery-ui 的 sortable 套件內建了 serilize ，它的功用是把 id 變成 query string 依順序回傳，所以我們只要找出規則就可以知道移動的是哪些欄位，把移動後的結果用 ajax 存進資料庫即完成拖曳的動作。 程式結構(html) html指定要排序的Container為id=\"memo-table\"，讓js可以幫他加上sortable()方法。要排序的欄位加上id=\"id-&lt;%= memo.id %&gt;\"，這樣...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Rails - 如何解決ajax沒有CSRF Key的問題 ",
        "url": "https://lukahuang.com/rails-how-to-solve-the-problem-of-ajax-without-csrf-key/",
        "excerpt": "錯誤訊息 當瀏覽器發生422錯誤，很有可能是缺少CSRF Key所引起的。這時候可以到 Log 確認一下是否是缺少 CSRF Key的情形。 方法一：用js抓mete的csrf-token $(document).ajaxSend(function(e, xhr, options) { var token =$j(\"meta[name='csrf-token']\").attr(\"content\"); xhr.setRequestHeader(\"X-CSRF-Token\", token); }); 想要學習處理csrf可以看看jquery-ujs的source code...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "CSS排版技巧 - 文繞圖",
        "url": "https://lukahuang.com/css-layout-techniques-spelling/",
        "excerpt": "文繞圖 先看效果，這次要做的是文繞圖技巧，可以選擇靠左或靠右。 html結構 圖片(img)必須在段落(p)的上面，當圖片加上float:left屬性時，圖片的空間會消失，變成浮在畫面上，利用這個技巧，我們來做到文繞圖的效果。 &lt;div class=\"image-container\"&gt; &lt;img class=\"image1\" src=\"http://zh-tw.learnlayout.com/images/ilta.png\" alt=\"\"/&gt; &lt;p class=\"pp1\"&gt;Lorem Ipsum is simply dummy text of the printing...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Rails - 使用 dropzone.js 實現檔案上傳",
        "url": "https://lukahuang.com/rails-use-dropzonejs-for-file-upload/",
        "excerpt": "實現上傳檔案 create的時候controller要設定一些值給js接。 def create @upload = Upload.create(upload_params) if @upload.save # send success header render json: { message: \"success\", fileID: @upload.id...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "在 Mac OS X 下使用 brew 安裝 Go",
        "url": "https://lukahuang.com/install-go-in-mac-osx-with-homebrew/",
        "excerpt": "兩種安裝方法 在 Mac OS X 下安裝 Go 有兩種方法，一種是去官網下載安裝包，另一種是使用 Homebrew 來安裝，為了以後更新的便利性著想，我決定使用 Homebrew 來安裝 Golang。 ps: 如果你還沒有 Homebrew 的話，需要先安裝 Homebrew 才能進行以下的安裝。 更新...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Deploy Redmine to VPS by Rails way in Ubuntu 14.04",
        "url": "https://lukahuang.com/deploy-redmine-to-vps-by-rails-way-in-ubuntu-14-04/",
        "excerpt": "前言 Redmine 是一套以 Ruby 為基底的專案管理網頁應用程式。而且正好就是使用 Ruby on Rails 開發的。所以如果你是 Rails 工程師，使用一般部屬 Rails 專案的方式就可將 Redmine 架起來。 本文記錄下來的方法，是我覺得最簡單，並且沒有副作用的架設方法。如果你要架設的不是 Redmine ，而是其他的 Rails 專案，也同樣適用。...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Rails 筆記 - 使用 ActiveRecord::Enum 設定狀態",
        "url": "https://lukahuang.com/rails-activerecord-enum-api/",
        "excerpt": "使用 Array 表達狀態 class Order KIND = [ ['未付款', 0], ['已付款', 1], ['已出貨',2] ] end 代表 orders 這張表中的 kind 欄位如果是...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "jQuery vs Ruby - 取得倒數的元素並組成字串",
        "url": "https://lukahuang.com/jquery-notes-get-last-element/",
        "excerpt": "摘要 本篇利用把陣列轉成字串這個題目，探討 jquery 和 ruby 中，map 和 join 行為的差異。 1. 在 jQuery 中可以用類似 Ruby 的方式取得尾部的倒數第幾個元素。 $('span[itemprop=title]').eq(-2) 對照 ruby 語法 arr=[1,2,3,4,5,6]...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "JS - 確認 jQuery 是否正確載入",
        "url": "https://lukahuang.com/js-sure-jquery-is-loaded-correctly/",
        "excerpt": "使用情境 有時候你不能確定環境是否已經載入 jQuery，所以你也不能使用 jQuery.ready()。 例如：你想要在別人的網頁上執行一段 javascript 程式碼。 這時候你就可以用本篇筆記記錄的方法等待 jQuery 載入後再執行自己的程式碼。 程式碼： //如果沒有載入的話，會再執行一次直到 jQuery 正確載入。 function defer(method) { if (window.jQuery) method();...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "在 Atom 設定 .god 對應至 Ruby Syntax ",
        "url": "https://lukahuang.com/in-the-atom-set-god-corresponds-to-ruby-syntax/",
        "excerpt": "簡介 God God 是以 Ruby 撰寫而成，但不僅限於使用於執行 Ruby 檔，常見的用途是維持程式的運行使程式不中斷，萬一中斷可以自動重啟。不過本篇的重點不在於 God 的使用方法，而是在 Atom 編輯器中於如何讓.god可以對應到 .rb 的語法高亮。 這邊就是設定的方法，打開 config.cson，可以經由 menu 列的 Atom &gt;...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Generate Safety Query String In ActiveRecord ",
        "url": "https://lukahuang.com/security-of-raw-sql-in-ruby/",
        "excerpt": "Solution 1: sanitize_sql ActiveRecord::Base.send(:sanitize_sql,[\"select * from my_table where description='%s' and id='%s'\",\"mal'formed\", 55], \"my_table\") =&gt; \"select * from my_table where description='mal\\\\'formed'...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Rails: 使用 Whenever 產生 Cronjob ",
        "url": "https://lukahuang.com/rails-gem-use-whenever-the-schedule-of-daily-routine/",
        "excerpt": "Part 1 - Crontab 介紹 Crontab 是 Linux 中用來管理例行事務的程式，而 whenever 實際上的作用就是用來產生 cronjob 的，所以先介紹一下 Linux 系統中的 crontab 如何操作。 crontab 指令 比較常用指令的有以下幾項：...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Linux - 如何查詢 OS 版本",
        "url": "https://lukahuang.com/linux-how-to-check-os/",
        "excerpt": "要接手 Server 第一件事情就是要了解 server 的環境啦。 這邊要記錄的是如何判別 Linux 系統類別的方式 1. 確認 Kernel 版本 使用 uname -or 可以取得 kernel 的版本 $ uname...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "ActiveRecord - 更新大量資料",
        "url": "https://lukahuang.com/active-record-batch-update/",
        "excerpt": "前言 本文使用的兩種方法，實際上都是用一個 sql 插入或更新所有的資料。 原因是使用其他的方法都沒有使用一個sql插入快。 如果插入的筆數過多，需要調整 sql buffer 的大小。 本例子的情景是一次更新100筆資料，資料量不大，所以不會遇到這個問題。 方法一：純 SQL 因為欄位很多，我要傳送的欄位又是完整的一個不少，所以我用 Model.attribute_names 來組合要傳入的欄位名稱。 然後將要更新的 Hash 組成 VALUES (x1,...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Ruby 爬蟲小技巧 - 處理 Html Entity",
        "url": "https://lukahuang.com/a-ruby-tip-html-entity-encode/",
        "excerpt": "這是一個在工作上遇到的小問題。 把網頁爬回來的時候有 HTML Entity 的編碼，看起來很不美觀。 舉例來說，爬回來的標題如果含有 HTML Entity 會是這個樣子: PURUS空氣清淨器&amp;#40;鴻海集團創星出品&amp;#41; 如果我想要使用資料建立自己資料庫的時候勢必要對 html entity 做一些處理 這時候 Gemhtmlentities就派上用場了。使用方法： require 'htmlentities' str =...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Ruby - 利用 ARGV 特性執行指定的方法",
        "url": "https://lukahuang.com/using-the-argv-characteristic-method-to-excute-specific-method/",
        "excerpt": "情境 我想手動執行 class 的某個方法。這邊的例子是當我想移動的時候，我可以選擇走路、跑步或是游泳。 方法一： 在 irb 中引入 Ruby 檔 class Move def self.walking puts \"walking\" end def self.running puts...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Ruby - 爬網頁時遇到的編碼錯亂問題",
        "url": "https://lukahuang.com/ruby-crawler-encoding-problem/",
        "excerpt": "問題描述 編碼問題是寫爬蟲常會遇到的問題。當你沒有處理好編碼問題，爬回來的網頁無法進行字串的切割，也無法使用 nokogiri 抽離需要的部份。 解決方法 找到原始網頁的編碼chartset='big' 把網頁 force_encoding 至原始格式 將網頁轉換成 utf-8，這是 ruby 預設的編碼，也是 nokogiri 接受的編碼。 force_encoding 的意思是強制使用某種編碼格式，但是其實不會進行編碼的轉換，因為ruby預設是utf-8， 所以如果網頁是 big5 我們就得先幫網頁加上網頁原有的編碼格式。...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Ruby metaprogramming - Method Lookup",
        "url": "https://lukahuang.com/ruby-metaprogramming-method-lookup/",
        "excerpt": "介紹 ruby metaprogramming 這本書除了教如何用 ruby 來生成其他的程式語言外，對語言特性的描述是比較深入的。因此在研讀這本書的同時，記錄下一些我覺得重要的部份。這些筆記不會依照章節的順序性。而是隨機記錄我需要的部分。 Method Lookup 即 Ruby 物件中查找方法的順序。從 Module 得到的方法與從 Class 繼承的方法其實是有順序性的。 知道其順序性後我們在編寫的程式碼的時候才可以比較清楚的預想程式行為的發生的情況。在追蹤原始碼的時候對語言特性多一份的理解追起來就會順利一點快速一點。 prepend 與 include 這邊是...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Elasticsearch 筆記",
        "url": "https://lukahuang.com/Elastic-Search-Note/",
        "excerpt": "前言 最近工作上使用的資料庫主要以 Elasticsearch 為主。而 Elasticsearch 跟傳統的關聯式資料庫有諸多的不同之處。初期在開發的時候並不是那麼快的上手。所以記錄下該如何使用 Elasticsearch 與如何在官方文件中找到自己需要的功能。 1. 準備工作 1.1 你需要知道的名詞 一開始我對名詞的對應並不是特別的重視，隨著實戰上的需求，我開始需要查找 API 的時候，發現文件有點不知道從何看起。後來隨著使用的功能越來越多。必須對 Elasticsearch 有更深一層的了解，於是花了大約兩天左右的時間把文件重要的部份大略的看過一次。這樣的過程讓我理解了哪些功能可以在哪些地方找到，也是我寫下這篇筆記的動機， index 對應關聯式資料庫中的 database。...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Ruby metaprogramming - Open Class and Refine ",
        "url": "https://lukahuang.com/ruby-meta-programming-refine/",
        "excerpt": "簡介 Open Class 是 Ruby 常用的技巧，指的是我們可以覆寫已經存在的方法，來修改物件或類別的行為。 在這邊我沒有要講詳細的作法，要介紹的是在 Ruby 2.0 中新增的 refine Refine Refine 是 ruby 2.0 之後加入的元素。 會使用 Refine 的原因是使用一般...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Ruby - 讓 irb 更好用",
        "url": "https://lukahuang.com/let-irb-better/",
        "excerpt": "前言 在使用pry的時候我們可以回到上一個輸入的指令，擁有記錄指令歷史的功能。其實irb也可以！ 開始修改 修改~/.irbrc require 'irb/ext/save-history' IRB.conf[:SAVE_HISTORY] = 200 IRB.conf[:HISTORY_FILE] = \"#{ENV['HOME']}/.irb-history\" 修改完之後按下方向鍵上和下即可使用上一個用過的指令。而實際上，歷史紀錄是儲存在~/.irb_history。 另一個常用的功能 - autocomplete 我們也順便把它開起來。 在~/.irbrc中irb/completion即可，現在你的 irb 按下...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "在 OSX 環境中測試 etc/hosts 是否成功修改",
        "url": "https://lukahuang.com/testing-ip-after-modifing-etc-hosts/",
        "excerpt": "前言 透過修改 etc/hosts 讓我們不需要透過 DNS 也能模擬網域名稱連線到伺服器。 可是設定是否成功？這時候我們可以用一些測試工具來檢測之。 OSX環境下 OSX 內建 dscacheutil 工具，可以用來檢測網址名稱對應 ip 的結果。 使用方法 dscacheutil -q host -a name...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "EFK(1) - 介紹 ELK Stack( Elasticsearch + Logstash + Kibana)",
        "url": "https://lukahuang.com/introduce-to-elasticsearch-logstash-kibana-aka-elk/",
        "excerpt": "ELK 整體架構 最左邊的 Logstash Shipper 用來運送 Log 到 Log 處理中心。 Redis 當做 Buffer 來緩衝資料量瞬間爆量的問題。 右邊的 Logstash 將 Log 加工成 Elasticserach、Kibana...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "EFK(2) - 介紹 EFK (Elasticsaerch + Fluentd + Kibana)",
        "url": "https://lukahuang.com/introduce-to-fluentd-efk/",
        "excerpt": "Fluentd 介紹 Fluentd 跟 Logstash 扮演的角色相同。 過去 Logstash 的歷史有效能不佳的記錄，Fluentd 在效能上的口碑更好。 如下圖所示，Fluentd 可以將蒐集 Log 負責的過程統一規格化。我們在使用的時候，選用想要蒐集Log樣式的 input plugin， 例如：要蒐集 apache 的 log...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "EFK(3) - Rails 與 Fluentd 的串接方法",
        "url": "https://lukahuang.com/rails-connect-to-fluentd/",
        "excerpt": "幾種可以跟 Rails 串接的方式 gem ‘fluent-logger’ Centralize Logs from Ruby Applications 自定解析 fluent/fluent-plugin-grok-parser: Fluentd’s Grok parser 使用 Rails-logger 來蒐集, 如果你的目標是讓 EFK...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "EFK(4) - 讓 Elasticsearch 與 Kibana 能夠接收 Rails 的 log",
        "url": "https://lukahuang.com/fluentd-connect-to-elasticsearch-kibana/",
        "excerpt": "架構 安裝步驟 2.1 安裝 elasticsearch $ curl -O https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-5.0.2.tar.gz $ tar zxvf elasticsearch-5.0.2.tar.gz $ cd elasticsearch-5.0.2 啟動 elasticsearch $ ./bin/elasticsearch...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "EFK(5) - Fluentd 高可用架構(High Availibity)",
        "url": "https://lukahuang.com/efk-high-availbility/",
        "excerpt": "架構 之前我們的架構是直接由 fluentd td-agent 傳送到 elasticsearch (如下圖) 為了更高的可用性(High Availibity)，我們在中間加入 aggregator 的角色，讓在 td-agent 扮演 forwarder 角色，職責更加單一，forwarder 只負責「傳送資料給 aggregator」。過濾(filter)資料的工作轉由 aggregator 負責，這樣的架構下降低了原本應用程式伺服器(application server)的負擔，提供了更高的可用性。架構如下：...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "EFK(6) - 使用 docker 包裝 Fluentd",
        "url": "https://lukahuang.com/use-docker-to-build-efk-stack/",
        "excerpt": "Aggregator 與 Forwarder 使用 docker 建立 fluentd image 為了模擬需要的環境，我們來使用 docker 建立 fluentd image 參考fluent/fluentd-docker-image來製作個人化的 fluentd image 2.1 準備工作 建立 custom-fluentd...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "CORS in Rails",
        "url": "https://lukahuang.com/cors-in-rails/",
        "excerpt": "Problem 跨網域存取的時候需要使用 CORS 來讓不同網域也可以存取相同網域的資源。請看下圖，Server 返回的 Response 必須明確指出哪些網域可以存取該 Server 的資源。 有這樣的行為模式的話，是不是可以在 Controller 中的 Response 加上 Header 來達成 CORS 呢？ 答案是否定的。 因為當...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Go - 在 OSX 安裝 GVM",
        "url": "https://lukahuang.com/gvm-in-osx/",
        "excerpt": "前言 之前有寫過一篇用 Brew 安裝 GO，因為習慣上會用 rvm、nvm 來管理程式語言的版本， 所以心血來潮也想試試看安裝 GVM 在作業環境，不過如標題所示， gvm Bug 滿多，而且跟我慣用的 Fish shell 不太相容。 總結下來，如果使用 OSX 環境推薦大家使用 Brew...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Time in Rails",
        "url": "https://lukahuang.com/time-in-rails/",
        "excerpt": "Rails 中的時間 Rails 中的時間是個有趣的議題，如果不多加注意，很容易被雷到。 尤其是一般在本地端開發的的時候並不會有時區不同的問題，但是一放到 Server 上，\b就會忽然爆炸。 是不能不小心的一個問題。 如果你在 config/application.rb 設定 Time.zone，範例如下: config.i18n.default_locale = \"zh-TW\" 如果透過 ActiveRecord 來存取，取得的會是你在 application.rb 裡面設定的...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "使用 GIT Precommit hooks 防止 Binding.pry 進入 Commit",
        "url": "https://lukahuang.com/git-precommit-hooks-copy/",
        "excerpt": "Problem 如果不小心把 binding.pry commit 進 git 而且不幸的 push 的話, 勢必要使用另一個 commit 來修正。如果要讓這個 commit 不見可能就需要用 git push -f 來修改。這樣做很醜，不優雅。根治的方法是 - 根本不應該將...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Web 基本功 - Cookie 與 Session",
        "url": "https://lukahuang.com/web-foundation-the-different-of-cookie-and-session/",
        "excerpt": "Cookie 1.1 什麼是 Cookie ? Cookie 在使用者第一次進入網站的時候產生。Browser 記錄一些隱私性較低的資料。 例如: 使用者第一次進入網站的時候會跳出教學視窗。當使用者點擊[關閉]後，Cookie 內記錄使用者已經看過教學了。使用者在下次登入的時候因為 Cookie 內記錄著使用者 已經看過教學，所以就不會跳出教學視窗。 1.2 Cookie 的特性 每個網站的 Cookie 是分開的,...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "OLTP 與 OLAP",
        "url": "https://lukahuang.com/oltp-vs-olap/",
        "excerpt": "什麼是 OLTP? 最近在讀資料庫文件的時候接觸到 OLTP 這個名詞，大致上理解並比記下來。 數據處理大致可以分成兩類: OLTP 與 OLAP。OLTP (Online Analytical Processing)指的就是傳統式關聯式資料庫。用在日常的的事物處理，比如說資料庫的增、刪、查、改。有以下特性: 並發性高 嚴格要求事務的種安全性 Realtime 要求高 什麼是 OLAP? OLAP (On-Line...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "[譯] Amazon S3 Delimiter and Prefix",
        "url": "https://lukahuang.com/aws-s3-delimiter-and-prefix/",
        "excerpt": "From: Amazon S3 Delimiter and Prefix - realguess posted at 2014/05/24 AWS S3 是一個不昂貴的線上檔案儲存服務，我們可以透過 javascript SDK 來使用 S3。當我使 SDK 的時候有以下幾件令人疑惑的事情:...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "[譯] 使用 AWS Ruby SDK v2 更新 S3 物件 Metadata",
        "url": "https://lukahuang.com/use-aws-ruby-sdk-to-update-s3-metadata/",
        "excerpt": "From: Updating S3 Object Metadata With the AWS Ruby SDK v2 Author: Matt posted at: 2017/5/31 今天我在 S3 就如同在玩火一樣 -...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Mysql - 如何修改 partition 並還原資料",
        "url": "https://lukahuang.com/modify-and-restore-mysql-partition/",
        "excerpt": "情境 在測試環境中我們想要置換 partition 的分區方式，而我們不想要遺失測試資料，所以需要備份 partition table 的資料。因為要修改的資料欄位很多，我不想要直接使用 alter table 的方式來修改 partition 分區，取而代之的是，我想要用 Migration 的方式來管理，所以會採用先備份 -&gt; 修改 -&gt; 接著再還原的方式。 深入了解 mysqldump...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "用 Harbor 架設 Private Docker Registry",
        "url": "https://lukahuang.com/harbor/",
        "excerpt": "用 Harbor 架設一個僅供公司內網存取的 Docker Registry 什麼是 Docker Registry ？ 顧名思義就是用來儲存鏡像檔 (Image) 的地方。例如：DockerHub 就是 Docker 官方提供的 Docker Registry，你可以把你自己編寫的 Dockerfile 編譯之後上傳到 Dockerhub...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "從零開始學 DevOps — 那就選擇最簡單的 Drone CI 開始吧！",
        "url": "https://lukahuang.com/drone/",
        "excerpt": "從零開始學 DevOps — 那就選擇最簡單的 Drone CI 開始吧！ 目前 DevOps 已經是 Backend 或 Frontend 多多少少都會碰到的部份。而 Drone，正可以讓開發者專心開發自己的專案，每個專案獨立設定需要的 CI / CD 流程，解放前端、後端工程師的戰鬥力，將測試與部屬結合在開發流程中，降低手動測試需要的時間。話不多說，趕快開始架設第一個 Drone...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Kubernetes 教學 01 - 概念與架構",
        "url": "https://lukahuang.com/kubernetes-tutorial-01/",
        "excerpt": "為什麼該學 K8S ？ Pod、Node 是什麼？搞的我好亂呀！ 適合讀者： 已經會使用 Docker，但是不知道 Kubernetes 是什麼。 想看看 Kubernetes 到底在幹嘛的人。 為什麼該用 Kubernetes? Kubernetes 中間共有八個字母有點長，所以大家就將他簡稱為 K8S。但使用 K8S 有什麼好處？...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Kubernetes 教學 02 — 在 Minikube 上部屬 Python Flask 應用程式",
        "url": "https://lukahuang.com/running-flask-on-minikube/",
        "excerpt": "Minikube、kubectl 終於派上用場囉 前情提要 在 前一篇 中我們弄懂了 K8S Cluster、Node、Pod 與 Container 的關係，並且在文章末段介紹了能夠與 kubectl -「能夠與 K8S 溝通的命令列工具」。這次我們用實際的操作，來認識容器化的實際過程，並把它部屬到本地的 Kubernetes 上面。 什麼是 Minikube ？...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Unit Test 中的替身：搞不清楚的Dummy 、Stub、Spy、Mock、Fake",
        "url": "https://lukahuang.com/unit-test/",
        "excerpt": "Unit Test 中的替身：搞不清楚的Dummy 、Stub、Spy、Mock、Fake 最近開始接觸單元測試，一堆名詞看不懂，來狠狠地 K 一下。而單元測試中的最佳男配角，就是替身 Double。藉由寫一篇文章的方式來讓自己更了解單元測試中的重要部分。一起來學寫測試，Go Go !! 註：接觸時間還很短，有錯還請不吝指正，如果之後發現我有理解錯誤再回來更正。 單元測試是什麼？ 單元測試可以讓你快速驗證程式的行為。了解單元測的話首先來介紹一下 SUT 目標對象。 舉個例子：你想要測試一台車是不是可以開，那麼 SUT 目標對象就是這台車。 為了確保這台車可以開，那麼就可以寫一個「這台車應該要可以開」的測試。如果這台車發生了故障，測試就會告訴你，這台車是壞掉的。 單元測試讓你的程式更容易維護。原因在於你能夠對程式寫測試，代表你寫的程式的「使用說明書」清楚易懂。使用說明書很容易懂，就可以直接拿來用，減少重複的程式碼，符合...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "TPM — 套件管理工具 ，讓你的 TMUX 更好用",
        "url": "https://lukahuang.com/tmp-let-your-tmux-better/",
        "excerpt": "tpm — 套件管理工具 ，讓你的 tmux 更好用 最近因為工作上需要用到開很多個視窗的情景，研究了一下如何把 tmux 變得更具有生產力。 tmux 是什麼？ tmux 是一個很好用的遠端 session 管理套件，兼具效能與功能性，可以讓你在遠端伺服器中，輕易管理背景執行程式。 Larry 在 **終端機 session 管理神器...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Kubernetes IDE - Lens 用圖形化介面管理 K8S",
        "url": "https://lukahuang.com/lens-the-ide-for-kubernetes/",
        "excerpt": "以往我們在管理 Kubernetes 集群的時候，需要大量的命令列操作，需要去四處找尋需要的資訊，例如你想看 Node 的狀態你可能需要在 AWS Console 上面看，如果你用的是 GKE 的話你就需要到的 GCP 的後台上看。你想要進入 Pod 你需要先下 kubectl get pods取得 pod 列表，接著再下 kubectl...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "TLDR 命令列神兵｜Linux 入門必裝",
        "url": "https://lukahuang.com/tldr/",
        "excerpt": "TLDR 命令列神兵｜Linux 入門必裝 TL;DR 的意思是：哩供蝦？講重點好嘛？ TLDR 能夠讓初學程式的新手 ，輕鬆了解命令列工具的各種 Linux 指令，並且自由運用。本篇文章分成幾個兩個部分： 命令列工具 Command line tool 到底是什麼東西？ TLDR 是什麼東西？它如何幫助我們快速適應 Linux 命令列工具？ 話不多說，我們開始吧。...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "從 Github 開源指南｜學習如何貢獻開源專案",
        "url": "https://lukahuang.com/introduction-to-open-source-guild/",
        "excerpt": "從 Github 開源指南｜學習如何貢獻開源專案 本週我們來讀一下「如何為開源做貢獻」。這份文件是 Github 的 Open Source Guide 開源指南，約莫兩年前剛出的時候全部是英文版的，已經三年了，拖到現在才讀（汗）。 （這篇是閱讀開源指南的筆記，原創內容偏少，原文在下方連結） 如何為開源做貢獻？ 透過為開源貢獻力量，能從中學習、幫助他人並且從中累積相關技能的經驗 - 任何你能想像得到的技能。 為什麼會有人為開源做出貢獻？有數不清的原因！…opensource.guide 是 Github 7000 顆星星的開源專案...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "ArgoCD - 透過 ArgoCD 認識 GitOps",
        "url": "https://lukahuang.com/introduction-to-gitops-via-argocd/",
        "excerpt": "ArgoCD — 透過 ArgoCD 認識 GitOps 什麼是 GitOps ? 兩年前初次聽到 GitOps 的時候，我想說是不是只要 Git tag 觸發一些部屬相關的事情，像是下了某個 tag，就會觸發某 Ansible 的工作，部屬某一台伺服器。很遺憾，完全不是我想的那樣。 在最近實際將 GitOps...",
        "teaser":
          
            null
          
      }
    
  ]

$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val();
    var result = idx.search(query);
    resultdiv.empty();
    resultdiv.prepend('<p>'+result.length+' Result(s) found</p>');
    for (var item in result) {
      var ref = result[item].ref;
      if(store[ref].teaser){
        var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<div class="archive__item-teaser">'+
                '<img src="'+store[ref].teaser+'" alt="">'+
              '</div>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      else{
    	  var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      resultdiv.append(searchitem);
    }
  });
});
