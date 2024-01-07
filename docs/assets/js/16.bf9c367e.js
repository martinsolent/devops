(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{287:function(t,e,s){t.exports=s.p+"assets/img/next-auth.a0bbcf02.png"},333:function(t,e,s){"use strict";s.r(e);var a=s(13),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"week-7-authentication-testing-strategies-and-deployment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#week-7-authentication-testing-strategies-and-deployment"}},[t._v("#")]),t._v(" Week 7: Authentication Testing Strategies and Deployment")]),t._v(" "),e("center",[e("img",{attrs:{src:s(287)}})]),t._v(" "),e("h2",{attrs:{id:"solent-we-now-have-authentication"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#solent-we-now-have-authentication"}},[t._v("#")]),t._v(" Solent, We Now Have Authentication!")]),t._v(" "),e("p",[t._v("Boom, the latest version of our room finder application now has authentication (side tutorial to come soon on how to do this); this raises a few DevOps concerns that we will address this week:")]),t._v(" "),e("ol",[e("li",[t._v("How do we test our application when it is locked down?")]),t._v(" "),e("li",[t._v("How do we manage authentication across different environments?")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://cloudinary.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Further, we can also upload room images through the image provider Cloudinary;  this raises the further question:"),e("OutboundLink")],1)]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("How do we facilitate third-party providers, such as Cloudinary, across different environments?")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("DEFINITION")]),t._v(" "),e("p",[t._v("📖 "),e("strong",[t._v("JAM Stack")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://jamstack.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("When making a proof of concept, such as our Room Finder, I am a fan of the JAM stack philosophy"),e("OutboundLink")],1),t._v(". According to this philosophy, we should create an application by orchestrating third-party APIs. In other words, don't create functionality yourself if you can use a third-party API that already performs this functionality. Case in point: rather than processing images ourselves, we will be using Cloudinary. Furthermore, rather than setting up an authentication system, we'll use a third-party OAuth provider  (e.g., GitHub).")])]),t._v(" "),e("h2",{attrs:{id:"lesson-dependencies-🔨"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lesson-dependencies-🔨"}},[t._v("#")]),t._v(" Lesson Dependencies 🔨")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git",target:"_blank",rel:"noopener noreferrer"}},[t._v("You will need to ensure you have the version control tool Git installed"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("You'll need to know the basic Git Commands (e.g., "),e("code",[t._v("checkout -b")]),t._v(", "),e("code",[t._v("push")]),t._v(", and "),e("code",[t._v("commit")]),t._v(")")])])]),t._v(" "),e("li",[t._v("While you can use any text editor for this session, I recommend that you install "),e("a",{attrs:{href:"https://code.visualstudio.com/download",target:"_blank",rel:"noopener noreferrer"}},[t._v("VS Code"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("You will need access to a MongDB database.\n"),e("ul",[e("li",[t._v("You can install your own locally")]),t._v(" "),e("li",[t._v("Use "),e("a",{attrs:{href:"https://www.mongodb.com/atlas/database",target:"_blank",rel:"noopener noreferrer"}},[t._v("AtlasDB"),e("OutboundLink")],1)])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://cloudinary.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("You need a Cloudinary account"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.github.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("You need a GitHub account"),e("OutboundLink")],1)])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("TASK 0")]),t._v(" "),e("p",[t._v("Lecturer to give an overview of the latest version of the Room Finder")])]),t._v(" "),e("h2",{attrs:{id:"task-0-1-get-the-starter-application"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#task-0-1-get-the-starter-application"}},[t._v("#")]),t._v(" TASK 0.1: Get the Starter Application")]),t._v(" "),e("p",[t._v("In your command line shell, run:")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone --branch week-7-starter-code  https://github.com/joeappleton18/solent-room-finder.git week-7\n\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[e("strong",[t._v("experimental fix")])]),t._v(" "),e("p",[t._v("Are the NPM modules taking too long to install? Instead of cloning the above version of our room finder application, try this version:")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone --branch week-7-starter-code_with_node_modules  https://github.com/joeappleton18/solent-room-finder.git week-7\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("The above version has the node modules stored in the repository.")])]),t._v(" "),e("p",[t._v("As discussed above, I am a fan of delegating functionality to third-party providers. The Room Finder is currently using:")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("GitHub (to manage authentication)")])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://cloudinary.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cloudinary (to manage image uploads, processing and optimisation). This means there are a few more environment variables to set; this will be the focus of Task 1."),e("OutboundLink")],1)])])]),t._v(" "),e("p",[t._v("This means there are a few more environment variables to set; this will be the focus of this task.")]),t._v(" "),e("p",[t._v("To get started:")]),t._v(" "),e("ul",[e("li",[t._v("Copy the "),e("code",[t._v(".env.local.example")]),t._v(" file in this directory to "),e("code",[t._v(".env.local")]),t._v(", which will be ignored by Git)")]),t._v(" "),e("li",[t._v("Within "),e("code",[t._v(".env.local.local")]),t._v("  set your "),e("code",[t._v("MONGODB_URI")])])]),t._v(" "),e("p",[t._v("We now need to set up an authentication methods. The room finder uses NextAuth for authentication: it is very nice! "),e("a",{attrs:{href:"https://next-auth.js.org/providers/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Currently, NextAuth allows us to use around 30 different sign-in methods for our application"),e("OutboundLink")],1),t._v(". I've chosen GitHub as it's simple to set up. Let's get started:")]),t._v(" "),e("iframe",{attrs:{src:"https://app.tango.us/app/embed/aa7f903b-5671-4505-ba79-3efe9551eca5?iframe",sandbox:"allow-scripts allow-top-navigation-by-user-activation allow-popups allow-same-origin",security:"restricted",title:"Tango Workflow",width:"100%",height:"600px",referrerpolicy:"strict-origin-when-cross-origin",frameborder:"0",webkitallowfullscreen:"webkitallowfullscreen",mozallowfullscreen:"mozallowfullscreen",allowfullscreen:"allowfullscreen"}}),t._v(" "),e("p",[t._v("Once you have registered your OAuth application, take note of the following values:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("Client ID")])]),t._v(" "),e("li",[t._v("Click generate a new "),e("code",[t._v("secret")]),t._v(" within your OAuth application, and copy the secret.")]),t._v(" "),e("li",[t._v("Set the following variables in your .env.local.\n"),e("ul",[e("li",[t._v('GITHUB_ID="<ClientID>"')]),t._v(" "),e("li",[t._v('GITHUB_SECRET="<secret>"')])])])]),t._v(" "),e("p",[e("strong",[t._v("Setting up Cloudinary")])]),t._v(" "),e("ul",[e("li",[t._v("Register for a new Cloudinary account")]),t._v(" "),e("li",[t._v("From your Cloudinary dashboard, take note of the following value:\n"),e("ul",[e("li",[t._v("Cloud Name")])])]),t._v(" "),e("li",[t._v("Set "),e("code",[t._v("NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME")]),t._v(" to your "),e("code",[t._v("cloud name")]),t._v(".")]),t._v(" "),e("li",[t._v("Run your application: "),e("code",[t._v("npm run dev")]),t._v(".")]),t._v(" "),e("li",[t._v("If all has gone well, you should now be able to login using GutHub.")])]),t._v(" "),e("p",[t._v("*"),e("em",[t._v("save your .env somewhere; there is no need to set it up again every week!")])]),t._v(" "),e("h2",{attrs:{id:"thinking-about-authentication"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thinking-about-authentication"}},[t._v("#")]),t._v(" Thinking About Authentication")]),t._v(" "),e("p",[t._v("This week you have seen we have added authentication to our Room Finder application. This, however, means our tests no longer work 😦. Since the application is locked down, we can't test it. Further, as we are using a third-party provider, Cypress won't leave http://localhost:3000 to log us in.")]),t._v(" "),e("p",[t._v("We have a few options here:")]),t._v(" "),e("ol",[e("li",[t._v("[We can log Cypress in programmatically](https://next-auth.js.org/getting-started/introduction")]),t._v(" "),e("li",[t._v("Allow email authentication for testing only, and set up a test account.")]),t._v(" "),e("li",[t._v("Disable authentication for our tests.")])]),t._v(" "),e("p",[t._v("Options 1  and 2 are good solutions; however, they are complex to implement. Remember, testing is to serve us to deliver our applications faster. As such, in this case, I went with option 3.  For the next task, let's implement this solution:")]),t._v(" "),e("h2",{attrs:{id:"task-1-disable-authentication-for-testing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#task-1-disable-authentication-for-testing"}},[t._v("#")]),t._v(" Task 1: Disable Authentication for Testing")]),t._v(" "),e("p",[t._v("Let's consider how we might disable")]),t._v(" "),e("p",[t._v("Let's consider how we might disable authentication when testing our application. Remember, we have "),e("code",[t._v("env.test")]),t._v(" that populates our testing environment variables. Add the following environment variable to this file:")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NEXT_PUBLIC_TESTING")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("blockquote",[e("blockquote",[e("p",[t._v("env.test")])])]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("NEXT_PUBLIC")]),t._v(" part of the above variable means it will be accessible from our application's client-side code.  Let's consider how we might use it.")]),t._v(" "),e("p",[t._v("Currently, if you look at "),e("code",[t._v("src/pages/create.tsx")]),t._v(", you can see we are using "),e("code",[t._v("useSession")]),t._v(", provided by Next auth, to authenticate our application.")]),t._v(" "),e("p",[t._v("We simply grab the session out of "),e("code",[t._v("useSession()")]),t._v(' and if it is not set we return "unauthorised":')]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("session"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div className"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"flex justify-center items-center h-[100vh]"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h1"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Unauthorised "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h1"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("blockquote",[e("blockquote",[e("p",[e("code",[t._v("src/pages/create.tsx")])])])]),t._v(" "),e("p",[t._v("We take a similar approach when securing our API (see, src/pages/api/rooms/[id].tsx).")]),t._v(" "),e("p",[t._v("Let's update our application so it does not check the session when we are testing. Within "),e("code",[t._v("src/pages/api/rooms/[id].tsx")]),t._v(" and "),e("code",[t._v("src/pages/api/rooms/index.tsx:")])]),t._v(" "),e("p",[t._v("Simply change the following line:")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("session"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("status")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("to")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("session "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("process"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NEXT_PUBLIC_TESTING")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("status")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("json")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("success")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("That's our API sorted!")]),t._v(" "),e("p",[t._v("Next, for the client side, we are going to write a wrapper hook for "),e("code",[t._v("useAuth")]),t._v(".")]),t._v(" "),e("ul",[e("li",[t._v("Create the file "),e("code",[t._v("src/hooks/useNextAuth.ts")]),t._v(" and enter the following code:")])]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" useSession "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"next-auth/react"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" session "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" useSession"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NEXT_PUBLIC_TESTING")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// eslint-disable-next-line @typescript-eslint/ban-ts-comment")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//@ts-ignore")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("session")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("session")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" session"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br")])]),e("blockquote",[e("blockquote",[e("p",[e("code",[t._v("src/hooks/useNextAuth.ts")])])])]),t._v(" "),e("p",[t._v("Above, we return a mock session if "),e("code",[t._v("NEXT_PUBLIC_TESTING")]),t._v(" is set. If it's not then we simply return the normal useSession, no change in functionality.")]),t._v(" "),e("p",[t._v("Next, in each place where we "),e("code",[t._v('import {useSession} from "next-auth/react";')]),t._v(" we need to update this to something along the lines of "),e("code",[t._v('import useSession from "../hooks/useNextAuth')]),t._v(" (this path will vary slightly). Update:")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("src/pages/index.tsx")])]),t._v(" "),e("li",[e("p",[t._v("src/pages/create.tsx")])]),t._v(" "),e("li",[e("p",[t._v("src/pages/rooms/[id]/edit.tsx")])]),t._v(" "),e("li",[e("p",[t._v("Now, run your application in test mode: "),e("code",[t._v("npm run test")]),t._v(". If all has gone well, you should now see that authentication is no longer running.")])]),t._v(" "),e("li",[e("p",[t._v("To check everything still works run: "),e("code",[t._v("npm run cypress:run")]),t._v(", the tests should be back in the green!")])]),t._v(" "),e("li",[e("p",[t._v("Finally, update your "),e("code",[t._v(".github/workflows/cypress.yaml")]),t._v(" setting the following environment variables:")])])]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("env")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MONGODB_URI")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mongodb+srv://test:test@cluster0.x08wt.mongodb.net/rooms_test?retryWrites=true&w=majority"')]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NEXT_PUBLIC_TESTING")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NEXTAUTH_SECRET")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sdhdshsdhsdhsdhsdhsdsdhwe67weew"')]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("blockquote",[e("blockquote",[e("p",[e("code",[t._v(".github/workflows/cypress.yaml")])])])]),t._v(" "),e("h2",{attrs:{id:"task-1-1-advanced"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#task-1-1-advanced"}},[t._v("#")]),t._v(" Task 1.1 (Advanced)")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("TASK 1.1 (Advanced)")]),t._v(" "),e("p",[t._v("Feeling ambitious, can you figure out how to mock Next Auth? Yes, I said above this is not worth doing:  this still holds; however, as a pure learning task it's appealing.")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("What about testing our image uploader?")]),t._v(" "),e("p",[t._v("⭐️")]),t._v(" "),e("p",[t._v("We are using Cloudinary to provide our image uploads and manipulations. We need to trust that this multi-billion dollar company have tested their code base. In general, I don't test the functionality of third-party service providers.")])]),t._v(" "),e("h2",{attrs:{id:"it-s-time-to-deploy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#it-s-time-to-deploy"}},[t._v("#")]),t._v(" It's Time To Deploy!")]),t._v(" "),e("p",[t._v("OMG, our application is ready to be deployed! Next, the week will consider the basics of deployment. Next week, we will look at the nitty-gritty of staging, development, and production environments.")]),t._v(" "),e("p",[t._v("I am not one to boast; however, check this out (https://solent-room-finder.vercel.app/). Yes, it's a deployed version of our Room Finding Application.")]),t._v(" "),e("h2",{attrs:{id:"vercel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vercel"}},[t._v("#")]),t._v(" Vercel")]),t._v(" "),e("p",[t._v("I recommend using Vercel as your hosting option. Apart from Cypress, it's one of the most amazing pieces of technology I've seen recently. This week, I want you to  work independently to work out how to host your own version of the room finding application.")]),t._v(" "),e("h2",{attrs:{id:"task-2-deploying-our-application"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#task-2-deploying-our-application"}},[t._v("#")]),t._v(" Task 2: Deploying our application")]),t._v(" "),e("p",[t._v("Deploying is straight forward: most of the time! First, you need to make sure that your application is hosted in a GitHub repository and has a main branch. To do this you will need run the following commands:")]),t._v(" "),e("ul",[e("li",[t._v("git remote remove origin")]),t._v(" "),e("li",[t._v("git remote add "),e("code",[t._v("<your remote repo>")])]),t._v(" "),e("li",[t._v('git checkout -b "main"')]),t._v(" "),e("li",[t._v("git push origin main")])]),t._v(" "),e("p",[t._v("Next, create an account with "),e("a",{attrs:{href:"vercel.com"}},[t._v("vercel.com")]),t._v(" and:")]),t._v(" "),e("ul",[e("li",[t._v("Create a new project")]),t._v(" "),e("li",[t._v('When prompted select "Import Git Repository"')]),t._v(" "),e("li",[t._v("Find the room finder repository in the list and select Import.")])]),t._v(" "),e("p",[t._v("Next will try and build your application; however, we need to set up our environment variables. Set the following variables from your project's settings section:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("MONGODB_URI")]),t._v("  - "),e("code",[t._v("mongodb+srv://<username>:<password>@cluster0.x08wt.mongodb.net/rooms-production?retryWrites=true&w=majority")])]),t._v(" "),e("li",[e("code",[t._v("NEXTAUTH_URL")]),t._v(" - should be your application's URL (e.g. - "),e("code",[t._v("https://solent-room-finder.vercel.app")]),t._v(")")]),t._v(" "),e("li",[e("code",[t._v("NEXTAUTH_SECRET")]),t._v(" - just put some random letters in here")]),t._v(" "),e("li",[e("code",[t._v("NEXT_PUBLIC_CLOUDINARY_PRESET")]),t._v(" - same as development")]),t._v(" "),e("li",[e("code",[t._v("NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME")]),t._v(" - same as development")])]),t._v(" "),e("p",[t._v("Set up a new GitHub OAuth application for your newly created domain and add the:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("GITHUB_SECRET")])]),t._v(" "),e("li",[e("code",[t._v("GITHUB_ID")])])]),t._v(" "),e("p",[t._v("Finally, re-deploy your application from the Vercel dash! If all has gone well, your application should be deployed!")])],1)}),[],!1,null,null,null);e.default=n.exports}}]);