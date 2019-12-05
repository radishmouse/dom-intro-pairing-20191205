# Pairing instructions:

## Only one of you will fork this repo

### That developer will "Add collaborator"

## Both of you will clone the fork to your computers.

## Each developer will make a branch

```sh
git branch myusername/myfeature
git checkout myusername/myfeature
```

## Each developer will make some code changes

## commit and push!

The first time you push, you need an extra `-u origin myusername/myfeature`

```sh
git push -u origin myusername/myfeature
```

If you don't it'll warn you and tell you what to type `:)`

## Each of you will create a PR

## Never merge your own branch, merge the other developer's branch

## Each of you will switch back to the `master` branch

```sh
git checkout master
```

## Then, pull down the changes to master

```sh
git pull
```

## Delete your old branch

```sh
git branch -d myusername/myfeature
```

## For every feature, and every bug fix, make a branch

