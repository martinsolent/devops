(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{314:function(t,e,a){"use strict";a.r(e);var o=a(13),r=Object(o.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_4-mutating-changing-a-database"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-mutating-changing-a-database"}},[t._v("#")]),t._v(" 4:Mutating (changing) a Database")]),t._v(" "),e("p",[t._v("We cover a lot in this tutorial. As such, I do not suggest you complete it in one sitting.")]),t._v(" "),e("p",[t._v("This tutorial closes the loop of database operations: I show you how to create, update and delete rooms. Furthermore,  I  explore some advanced array operations that allow us to filter data elegantly.")]),t._v(" "),e("p",[e("a",{attrs:{href:"#getting-started"}},[e("strong",[t._v("Before you start the tutorial")]),t._v(", follow the getting started steps below")])]),t._v(" "),e("p",[t._v("As this is a fairly long tutorial, I've broken it down into chunks.")]),t._v(" "),e("h2",{attrs:{id:"part-1-overview-everyone-should-watch-this"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#part-1-overview-everyone-should-watch-this"}},[t._v("#")]),t._v(" Part 1: Overview (everyone should watch this)")]),t._v(" "),e("iframe",{staticStyle:{border:"1px solid #464646"},attrs:{src:"https://solent.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=3849d01e-a7be-4916-a3ed-af3f009fc88d&autoplay=false&offerviewer=true&showtitle=true&showbrand=true&captions=true&interactivity=all",height:"405",width:"720",allowfullscreen:"",allow:"autoplay"}}),t._v(" "),e("h2",{attrs:{id:"part-2-array-filtering-recommended-but-not-essential"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#part-2-array-filtering-recommended-but-not-essential"}},[t._v("#")]),t._v(" Part 2: Array Filtering (recommended, but not essential)")]),t._v(" "),e("p",[t._v("In this part of the tutorial, I look at how we can use JavaScript array filtering to get the room filter working. This is fairly advanced; however, it shows off the power of JavaScript.")]),t._v(" "),e("iframe",{staticStyle:{border:"1px solid #464646"},attrs:{src:"https://solent.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=ca67167c-9c44-4696-ae38-af3f009fc8cd&autoplay=false&offerviewer=true&showtitle=true&showbrand=true&captions=true&interactivity=all",height:"405",width:"720",allowfullscreen:"",allow:"autoplay"}}),t._v(" "),e("h2",{attrs:{id:"part-3-mutating-a-database-everyone-should-watch-this"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#part-3-mutating-a-database-everyone-should-watch-this"}},[t._v("#")]),t._v(" Part 3: Mutating a Database (everyone should watch this)")]),t._v(" "),e("p",[t._v("In this part of the tutorial, I look how we can change the values in a database.")]),t._v(" "),e("iframe",{staticStyle:{border:"1px solid #464646"},attrs:{src:"https://solent.cloud.panopto.eu/Panopto/Pages/Embed.aspx?id=20475ad2-afe3-4589-a732-af3f009fc910&autoplay=false&offerviewer=true&showtitle=true&showbrand=true&captions=true&interactivity=all",height:"405",width:"720",allowfullscreen:"",allow:"autoplay"}}),t._v(" "),e("h2",{attrs:{id:"getting-started"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("git clone --branch tutorial-4-starter-code https://github.com/joeappleton18/solent-room-finder.git tutorial-4")])]),t._v(" "),e("li",[t._v("Navigate into the tutorial-4 folder")]),t._v(" "),e("li",[t._v("Install the dependencies: "),e("code",[t._v("npm install")])])]),t._v(" "),e("h3",{attrs:{id:"setting-up-the-database"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-database"}},[t._v("#")]),t._v(" Setting up the database")]),t._v(" "),e("ul",[e("li",[t._v("Get the connection string of your MongoDB server.In the case of MongoDB Atlas, it should be a string like this (notice how we've added rooms as the database name):")])]),t._v(" "),e("p",[e("code",[t._v("mongodb+srv://<username>:<password>@my-project-abc123.mongodb.net/rooms?retryWrites=true&w=majority")])]),t._v(" "),e("ul",[e("li",[t._v("If you are running MongoDB locally, it will look something like this:")])]),t._v(" "),e("p",[e("code",[t._v("mongodb://127.0.0.1:27017/rooms")])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Copy the "),e("code",[t._v(".env.local.example")]),t._v(" file in this directory to .env.local, which will be ignored by Git)")]),t._v(" "),e("ul",[e("li",[t._v("Set your "),e("code",[t._v("MONGODB_URI")]),t._v(" with the the MongoDB connection string.")])])]),t._v(" "),e("li",[e("p",[t._v("Open "),e("a",{attrs:{href:"http://localhost:3000",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:3000"),e("OutboundLink")],1),t._v(" with your browser to see the result.")])]),t._v(" "),e("li",[e("p",[t._v("Run the development server: "),e("code",[t._v("npm run dev")])])]),t._v(" "),e("li",[e("p",[t._v("Check everything is working by running our tests: "),e("code",[t._v("npm run cypress:run")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);