// Introduction to Git:
// Git is a version control system used to track changes in files and manage different versions of a project.


// Version Control:
// Version control is a system that tracks changes made to files over time.

// Benefits:

// Tracks changes.
// Helps restore previous versions.
// Supports teamwork.
// Helps identify who changed a file.


// Repository:
// A repository (repo) is a location where project files and their version history are stored.

// There are two common types:
// Local repository: Stored on your computer.
// Remote repository: Stored on a server or online platform such as GitHub.

// Working Directory:
// The working directory is the folder containing your project files where you create, modify, or delete files.


// Staging Area:
// The staging area is where you select the changes you want to include in your next commit.


// Add all changes in the current directory:
// git add .


// Commit:
// A commit is a snapshot of the staged changes saved in your Git repository's history.

// git commit -m "Added homepage" //Creating a commit


// Branch:
// A branch is an independent line of development that allows you to work on features
//  without directly changing another branch.

// View branches:
// git branch

// Create a branch:
// git branch feature

// Switch to a branch:
// git switch feature

// Create and switch to a new branch:
// git switch -c feature


// Merge:
// Merging combines changes from one branch into another.

// First, switch to main:
// git switch main

// Then merge the feature branch:
// git merge feature


// Remote Repository:
// A remote repository is a version of your Git repository hosted somewhere else, 
// usually on a platform such as GitHub.


// Clone:
// Cloning creates a local copy of an existing remote Git repository, including its tracked history.

// Command:
// git clone https://github.com/username/project.git

// Create or Modify Files
//           |
//           v
//    Working Directory
//           |
//       git add .
//           |
//           v
//      Staging Area
//           |
//  git commit -m "message"
//           |
//           v
//    Local Repository
//           |
//     git push origin main
//           |
//           v
//   Remote Repository
//        (GitHub)

// Important Git Commands for Revision
// Command	Purpose
// git init              	              Initialize a repository
// git clone <url>	                         Clone a repository
// git status	                               Check file status
// git add .	                                    Stage changes
// git commit -m "message"	                        Commit changes
// git branch	                                      List branches
// git switch -c feature	                  Create and switch to a branch
// git merge feature	                          Merge a branch
// git fetch	                                    Fetch remote updates
// git pull	                                   Retrieve and integrate remote changes
// git push	                                         Push local commits
// git log	                                     View commit history
// git diff	                                          View changes
// git stash	                            Temporarily save uncommitted changes
// git revert <commit>	                        Reverse a commit with a new commit
// git rebase main	                          Reapply current branch commits onto main
// git remote -v	                              View remote repositories
// git tag	                                                 List tags


