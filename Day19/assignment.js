// BASICS OF GIT & GITHUB – ALL CODE IN ONE FILE

// Installation Verification 
// git --version

// Configure Git Identity
// git config --global user.name "Your Name"
// git config --global user.email "your.email@example.com"
// git config --list

// Practice Task 1: First Repository
// mkdir my-first-project
// cd my-first-project
// git init
// ls -a

// Practice Task 2: Check Status
// touch hello.txt
// git status

// Add & Commit
// echo "Hello World" > hello.txt
// git add hello.txt
// git status
// git commit -m "Added hello.txt with greeting"

// Practice Task 3: Multiple Files
// touch index.html style.css script.js
// echo "<h1>Hello</h1>" > index.html
// echo "body {}" > style.css
// echo "console.log('Hi')" > script.js

// git add index.html
// git status
// git add .
// git commit -m "Initial project setup"

// View History
// git log
// git log --oneline

// Connect to GitHub
// git remote add origin https://github.com/username/my-first-project.git
// git remote -v
// git push -u origin main

// Branching
// git branch
// git checkout -b feature-about-page
// touch about.html
// git add about.html
// git commit -m "Added about page"
// git checkout main

// Merging
// git checkout -b feature-navbar
// echo "<nav>Navbar</nav>" > navbar.html
// git add navbar.html
// git commit -m "Added navbar"
// git checkout main
// git diff feature-navbar
// git merge feature-navbar
// git branch -d feature-navbar

// Practice Task 7
// git checkout -b feature-footer
// echo "<footer>Footer</footer>" > footer.html
// git add footer.html
// git commit -m "Added footer"
// git checkout main
// git merge feature-footer

// Cloning
// cd ..
// git clone https://github.com/username/my-first-project.git

// Pull Latest Changes
// cd my-first-project
// git pull origin main

// Merge Conflict Practice
// echo "Hello" > test.txt
// git add test.txt
// git commit -m "Added test file"

// git checkout -b feature-1
// echo "Hi" > test.txt
// git add test.txt
// git commit -m "Changed Hello to Hi"

// git checkout main
// echo "Hey" > test.txt
// git add test.txt
// git commit -m "Changed Hello to Hey"

// git merge feature-1
// # (Resolve conflict manually)
// git add test.txt
// git commit -m "Resolved merge conflict"

// Full Workflow
// git pull origin main
// git checkout -b feature-new-page
// touch newpage.html
// git add .
// git commit -m "Added new page"
// git push origin feature-new-page
// git checkout main
// git pull origin main
// git branch -d feature-new-page

// Real Project Practice
// mkdir restaurant-website
// cd restaurant-website
// git init
// touch index.html style.css README.md
// git add .
// git commit -m "Initial structure"

// git checkout -b feature-menu
// touch menu.html
// git add menu.html
// git commit -m "Added menu page"
// git checkout main
// git merge feature-menu

// git checkout -b feature-contact
// touch contact.html
// git add contact.html
// git commit -m "Added contact page"
// git checkout main
// git merge feature-contact

// git remote add origin https://github.com/username/restaurant-website.git
// git push -u origin main