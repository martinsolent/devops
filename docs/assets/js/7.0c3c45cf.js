(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{270:function(t,e,s){t.exports=s.p+"assets/img/ci-pipeline.c5857f53.png"},271:function(t,e,s){t.exports=s.p+"assets/img/green-tick.443ebe07.png"},272:function(t,e,s){t.exports=s.p+"assets/img/actions.1a106cea.png"},324:function(t,e,s){"use strict";s.r(e);var a=s(13),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"week-3-static-code-analysis-ii"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#week-3-static-code-analysis-ii"}},[t._v("#")]),t._v(" Week 3: Static Code Analysis (ii)")]),t._v(" "),e("p",[e("img",{attrs:{src:s(270),alt:""}})]),t._v(" "),e("p",[t._v("This week, we will complete the static analysis rung of the CI pipeline. In doing so, we'll add code formatting to the room-checking sample application. Further, we'll put in place checks to ensure that code that does not comply with our linting and formatting rules does not end up in our codebase.")]),t._v(" "),e("p",[t._v("Throughout this week, we will be addressing the following questions:")]),t._v(" "),e("ol",[e("li",[t._v("How can we ensure that a team follows a consistent coding standard?")]),t._v(" "),e("li",[t._v("How can we enforce these standards?")]),t._v(" "),e("li",[t._v("How can we integrate these standards into our CI/CD pipeline?")]),t._v(" "),e("li",[t._v("How can I deploy my web applications?")])]),t._v(" "),e("h2",{attrs:{id:"lesson-dependencies-🔨"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lesson-dependencies-🔨"}},[t._v("#")]),t._v(" Lesson Dependencies 🔨")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git",target:"_blank",rel:"noopener noreferrer"}},[t._v("You will need to ensure you have the version control tool Git installed"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("You'll need to know the basic Git Commands (e.g., "),e("code",[t._v("checkout -b")]),t._v(", "),e("code",[t._v("push")]),t._v(", and "),e("code",[t._v("commit")]),t._v(")")])])]),t._v(" "),e("li",[t._v("While you can use any text editor for this session, I recommend that you install "),e("a",{attrs:{href:"https://code.visualstudio.com/download",target:"_blank",rel:"noopener noreferrer"}},[t._v("VS Code"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"getting-the-week-two-starting-code-base"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-the-week-two-starting-code-base"}},[t._v("#")]),t._v(" Getting the week two starting code base")]),t._v(" "),e("p",[t._v("In your command line shell, run:")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone --branch week-3-starter-code https://github.com/joeappleton18/solent-room-finder.git solent-room-finder-week-3\n\n- Navigate into the created  "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("solent-room-finder"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" folder: "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" solent-room-finder-week-3"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("\n- Install the dependencies: "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("\n- Run the development server: "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("\n- Open "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("http://localhost:3000"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("http://localhost:3000"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" with your browser to see the result.\n\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("h2",{attrs:{id:"task-1-set-up"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#task-1-set-up"}},[t._v("#")]),t._v(" TASK 1: Set up")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("TASK 1: Set up")]),t._v(" "),e("p",[t._v("Follow the steps above to, ensure you have the lesson dependencies set up: including the starting code base.")])]),t._v(" "),e("h2",{attrs:{id:"prettier"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prettier"}},[t._v("#")]),t._v(" Prettier")]),t._v(" "),e("p",[t._v("Prettier is an opinionated code formatter; however, as you have seen, last week, our linter already formats code (to a degree). It may at first seem similar to a linter; however, on closer inspection, there are some subtle differences:")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Linters are mostly worried about code quality: eg no-unused-vars, no-extra-bind, no-implicit-globals, prefer-promise-reject-error")])]),t._v(" "),e("li",[e("p",[t._v("Prettier prints your whole program from scratch applying only formatting rules: eg: max-len, no-mixed-spaces-and-tabs, keyword-spacing, comma-style. As a developer, you never have to worry about formatting your code again.")])])]),t._v(" "),e("h2",{attrs:{id:"task-1-installing-prettier"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#task-1-installing-prettier"}},[t._v("#")]),t._v(" TASK 1: Installing Prettier")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("TASK 1: Installing Prettier")]),t._v(" "),e("p",[t._v("Let's get going with prettier awesomeness:")]),t._v(" "),e("ol",[e("li",[t._v("Install the dependencies: "),e("code",[t._v("npm install --save-dev eslint-config-prettier prettier")])]),t._v(" "),e("li",[t._v("Notice how we installed "),e("code",[t._v("eslint-config-prettier")]),t._v(" along with "),e("code",[t._v("prettier")]),t._v(".\nESlint can do some formatting for us; however, we don't want it to conflict with prettier. The "),e("code",[t._v("eslint-config-prettier")]),t._v(" package ensures that only prettier's formatting rules are used. We can use it by adding "),e("code",[t._v("prettier")]),t._v(" to the extends array of our "),e("code",[t._v("eslintrc.json")]),t._v(" file:")])]),t._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[t._v("`eslintrc.json`\n\n```JavaScript\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ...\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"extends"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"next/core-web-vitals"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint:recommended"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plugin:@typescript-eslint/recommended"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"prettier"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n ....\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br")])]),e("blockquote",[e("blockquote",[e("p",[e("code",[t._v("eslintrc.json")]),t._v(": adding prettier")])])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("You can now run prettier: "),e("code",[t._v("npx prettier --write .")]),t._v(". This command will automatically fix the formatting in your code.")])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",target:"_blank",rel:"noopener noreferrer"}},[t._v("Like ESlint, there is a VS code plugin for prettier"),e("OutboundLink")],1),t._v(". Install the plugin.")])]),t._v(" "),e("li",[e("p",[t._v("We can now update our "),e("code",[t._v("./vscode/settings.json")]),t._v(" file to auto format on save:")])])]),t._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"editor.codeActionsOnSave"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"source.fixAll.eslint"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"source.fixAll.format"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"eslint.validate"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"javascript"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"editor.defaultFormatter"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"esbenp.prettier-vscode"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("blockquote",[e("blockquote",[e("p",[t._v(".vscode/settings.json: these are what my final settings look like")])])]),t._v(" "),e("ul",[e("li",[t._v("Finally, in your root directory create the following two files: "),e("code",[t._v(".prettierignore")]),t._v(" and "),e("code",[t._v(".prettierrc.json")]),t._v(". "),e("code",[t._v(".prettierrc.json")]),t._v(" allows us to add custom rules, let's add the following:")])]),t._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"printWidth"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bracketSpacing"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("p",[e("code",[t._v(".prettierrc.json")]),t._v(": Prettier already has a solid rule set; above, I am tweaking it to my preferences. "),e("a",{attrs:{href:"https://prettier.io/playground/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Have a play in the playground if you want to add further rules"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"husky"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#husky"}},[t._v("#")]),t._v(" Husky")]),t._v(" "),e("p",[t._v("If you've got this far, you've come a long way: give yourself a pat on the back. However, we are not quite finished. Would it not be nice if we could automatically run checks (e.g., linting, formatting, testing, and type checking) before each commit. This is where Husky comes into play.")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://typicode.github.io/husky/#/",target:"_blank",rel:"noopener noreferrer"}},[t._v('According to the developers, "Husky improves your commits and more 🐶 woof! You can use it to lint your commit messages, run tests, lint code, etc... when you commit or push. Husky supports all Git hooks.'),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"task-2-installing-husky"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#task-2-installing-husky"}},[t._v("#")]),t._v(" TASK 2: Installing Husky")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("TASK 5: Install Husky")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("npx husky-init")])]),t._v(" "),e("li",[e("p",[t._v("npm install")])]),t._v(" "),e("li",[e("p",[t._v("Next, we need to set up some scripts in our package.json file, these will run on each commit:")]),t._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\t...\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"prettier"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"prettier --write ."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  \t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"types"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tsc"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t...\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("blockquote",[e("blockquote",[e("blockquote",[e("p",[e("code",[t._v("package.json")]),t._v(": updated rules")])])])])]),t._v(" "),e("li",[e("p",[t._v("Finally, tell Husky which scripts to run in the "),e("code",[t._v(".husky/pre-commit")]),t._v(" file. Your file should resemble the below:")])])]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/usr/bin/env sh")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dirname")]),t._v(" -- "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$0")]),t._v('"')]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('/_/husky.sh"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"running pre-commit checks"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## prettier")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run  prettier\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run types\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run lint\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br")])]),e("ul",[e("li",[t._v("Now, when you make a commit the above checks should run. If they fail, your code won't be committed.")])])]),t._v(" "),e("h2",{attrs:{id:"github-workflows"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#github-workflows"}},[t._v("#")]),t._v(" GitHub Workflows")]),t._v(" "),e("p",[t._v("A recent addition to GitHub is something known as workflows.")]),t._v(" "),e("p",[t._v('According to GitHub, "Workflows are defined in the .github/workflows directory in a repository, and a repository can have multiple workflows, each of which can perform a different set of tasks. For example, you can have one workflow to build and test pull requests, another workflow to deploy your application every time a release is created, and still another workflow that adds a label every time someone opens a new issue."')]),t._v(" "),e("p",[t._v("This is a very exciting prospect; we can use workflows to automate repetitive jobs. Today, we will consider how we can automate our static code checking on both a pull request to our room checker's master branch and a push request to any branch. Moving forward, we can define jobs that build and test our room-checking application. Over the course of a project, this could save you hours of manual, tedious labour.")]),t._v(" "),e("h2",{attrs:{id:"task-3-our-first-workflow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#task-3-our-first-workflow"}},[t._v("#")]),t._v(" Task 3: Our First Workflow")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("⭐️")]),t._v(" "),e("p",[t._v("If you can't push and you are sure you are the only one working on branch you can use: "),e("code",[t._v("git push origin <branch-name> --force")])])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("TASK 5: Our First Workflow")]),t._v(" "),e("p",[t._v("Let's create a workflow that will check the quality of code being committed to our remote repository.")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://docs.github.com/en/actions/quickstart",target:"_blank",rel:"noopener noreferrer"}},[t._v("First, read the first page of the GitHub actions documentation"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("In your room finder project, create the "),e("code",[t._v(".github/workflows/")]),t._v(" directory to store your workflow files.")]),t._v(" "),e("li",[t._v("Create a file in "),e("code",[t._v(".github/workflows/")]),t._v(" called "),e("code",[t._v("main.yaml")])]),t._v(" "),e("li",[t._v("Add the following code to "),e("code",[t._v("main.yaml")])])]),t._v(" "),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Checking Code Quality\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"push"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pull_request"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## run on push and pulls")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("eslint")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Run Code Quality Static Checks "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## the name of our job")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("permissions")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("contents")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" read\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("security-events")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" write\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("actions")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" read "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# only required for a private repository by github/codeql-action/upload-sarif to get the Action run status")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Checkout code\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@v3\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Install Dev Dependencies\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" npm install "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("only=dev\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Run ESLint\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" npm run lint\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("continue-on-error")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br")])]),e("blockquote",[e("blockquote",[e("p",[e("a",{attrs:{href:"https://docs.github.com/en/actions/quickstart",target:"_blank",rel:"noopener noreferrer"}},[t._v("To understand what the above code snippet does, read the GitHub actions documentation"),e("OutboundLink")],1)])])]),t._v(" "),e("ul",[e("li",[t._v("Commit your changes")]),t._v(" "),e("li",[t._v("Next, switch to a "),e("code",[t._v("main")]),t._v(" branch: "),e("code",[t._v("git checkout -b main")])]),t._v(" "),e("li",[t._v("Set up a GitHub repository to hold your project, and grab the remote address")]),t._v(" "),e("li",[t._v("Remove the existing remote address: "),e("code",[t._v("git remote remove origin")])]),t._v(" "),e("li",[t._v("Add your repository's remote address: "),e("code",[t._v("git remote add origin < your address>")])]),t._v(" "),e("li",[t._v("Push to your remote repository: "),e("code",[t._v("git push origin main")])]),t._v(" "),e("li",[t._v("If all has worked well, there should now be a green tick on the top of your repository:")])]),t._v(" "),e("p",[e("img",{attrs:{src:s(271),alt:""}})]),t._v(" "),e("ul",[e("li",[t._v("You can also verify your job has run by clicking the actions button at the top of your repository:")])]),t._v(" "),e("p",[e("img",{attrs:{src:s(272),alt:""}})]),t._v(" "),e("ol",[e("li",[t._v("Can you expand "),e("code",[t._v("main.yaml")]),t._v(" to also check types and run prettier?")]),t._v(" "),e("li",[t._v("Check out a new branch, push to the remote repository, and raise a pull request: you should get a detailed report on the status of the jobs that have run.")]),t._v(" "),e("li",[e("strong",[t._v("Bonus Task:")]),t._v(" "),e("a",{attrs:{href:"https://github.com/marketplace?type=actions",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub actions has a marketplace of actions we can use"),e("OutboundLink")],1),t._v(". Can you use the marketplace to create a new job that does something interesting. "),e("a",{attrs:{href:"https://docs.github.com/en/actions/managing-issues-and-pull-requests/moving-assigned-issues-on-project-boards",target:"_blank",rel:"noopener noreferrer"}},[t._v("This project management example sparked my interest"),e("OutboundLink")],1),t._v(". "),e("a",{attrs:{href:"https://github.com/marketplace/actions/discord-message-notify",target:"_blank",rel:"noopener noreferrer"}},[t._v("You can also do things like update discord on a pull request"),e("OutboundLink")],1)])])]),t._v(" "),e("h3",{attrs:{id:"task-solutions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#task-solutions"}},[t._v("#")]),t._v(" Task solutions")]),t._v(" "),e("blockquote",[e("blockquote",[e("p",[t._v("Solution corresponding to the task step number. You should attempt the task before you look at the solutions 😆.")])])]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("SOLUTION (1) Click me to view the code")]),t._v(" "),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Run Prettier\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" npm run prettier\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Check Types\n\t"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" npm run types\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])])]),t._v(" "),e("h2",{attrs:{id:"task-4-home-study"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#task-4-home-study"}},[t._v("#")]),t._v(" Task 4: Home Study")]),t._v(" "),e("p",[t._v("Using what you have learnt so far:")]),t._v(" "),e("ul",[e("li",[t._v("Static checking")]),t._v(" "),e("li",[t._v("Automation (Huskey, GitHub Actions)")])]),t._v(" "),e("p",[t._v("Create a starter Next.js project, and enforce coding standards and type checking: this will be useful for your assessment.")]),t._v(" "),e("h2",{attrs:{id:"further-reading"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[t._v("#")]),t._v(" Further Reading")]),t._v(" "),e("h3",{attrs:{id:"typescript"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#typescript"}},[t._v("#")]),t._v(" TypeScript")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.typescriptlang.org/docs/handbook/intro.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("The TypeScript Hand Book, well worth flicking through∫"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"code-formatting-and-linting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#code-formatting-and-linting"}},[t._v("#")]),t._v(" Code Formatting and Linting")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://prettier.io/playground/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Check out all the formatting rules you can use for prettier"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"github-workflows-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#github-workflows-2"}},[t._v("#")]),t._v(" GitHub Workflows")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://docs.github.com/en/actions/using-workflows/about-workflows",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Workflows"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);