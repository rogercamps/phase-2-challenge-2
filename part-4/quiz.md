1- When you run a command in the terminal, where does BASH look for that command?
- If command is neither a function nor a built-in, look for it analyzing the directories listed in PATH. Bash uses a hash table (data storage area in memory) to remember the full path names of executables so extensive PATH searches can be avoided.

2- On a UNIX computer, how do you stop a running process?
- You can use Ctrl - C to end a program's execution in the terminal. You can kill programs that have already been stopped with kill: kill PID

3- What packages do you have installed via homebrew?
- The list of packages after I run  ``` $ brew list ``` in my computer are as follows:

autoconf        
git             
icu4c           
libgpg-error    
libtool  
openssl        
pkg-config      
readline
automake        
hub             
jpeg            
libksba  
node    
ossp-uuid      
postgresql      
redis

4- On a UNIX computer, how do you find the process id of a running process?

- using the command ``` $ ps ```

5- In a terminal, what does control-c do?

- Kills the current process

6- What would be the result of typing the following commands?

$ cd /Users/steve

- go to the steve directory

$ mkdir foo

- create a folder called foo inside the steve directory

$ touch bar

- create a file called bar inside the steve directory

$ cd foo

- go into the foo directory

$ touch bar

- create another file called also bar but this time inside the foo folder

$ pwd

- it shows me the present working directory, showing me the path which would be /Users/steve/foo

7- How do you set an environment variable in your shell?

8- What keyboard shortcut do you use to split the screen in your editor?

- Command + k and then arrow of the direction i want to split to

9- How do you create an alias in your shell?

10- When a terminal command completes, how can you tell if it was successful or not?

- Depending on if what I see is a green or a red arrow

11- What does your ~/.gitconfig have in it? (paste the whole file here)

- ```git config --list``` shows the following results

credential.helper=osxkeychain

user.name=rogercamps

user.email=rogercamps@me.com

push.default=simple

core.repositoryformatversion=0

core.filemode=true

core.bare=false

core.logallrefupdates=true

core.ignorecase=true

core.precomposeunicode=true

remote.origin.url=https://github.com/rogercamps/phase-2-challenge-2.git

remote.origin.fetch=+refs/heads/*:refs/remotes/origin/*

branch.master.remote=origin

branch.master.merge=refs/heads/master




12- What is the difference between a relative and absolute path?

- One has to be calculated with respect to another URI. The other does not.

13- Lets say you have the following file structure
```
~
└── Projects
    ├── pinterest-for-dogs
    │   └── package.json
    └── linkedin-for-dancers
        ├── README.md
        └── package.json

```

And you were in the linkedin-for-dancers folder. What command would you use to copy the README.md file to the pinterest-for-dogs folder?

14- What keyboard shortcut do you use, in your editor, to go to a file in the project you have open?

- Command + b

15- What files or folders do you want all git repositories to ignore?

- node_modules/

16- What is the main difference between Array.map and Array.forEach in JavaScript?

- foreach: This iterates over a list and applies some operation with side effects to each list member (example: saving every list item to the database)

- map: This iterates over a list, transforms each member of that list, and returns another list of the same size with the transformed members (example: transforming list of strings to uppercase)
