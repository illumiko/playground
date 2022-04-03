#!/bin/sh
#this is a comment
###LOGING VALUES

# echo "Hello     World"
# echo "Hello World"
# echo "Hello * World"
# echo Hello * World
# echo "Hello" World
# echo Hello "   " World
# echo "Hello "*" World"
# echo `hello` world
# echo 'hello' world

###VARIABLES 

# myMsg='im eyanat'
# echo $myMsg

###GETTING USER RESPONSES
# echo enter a number
# read num
# echo entered:$num

###SETTING VARIABLES BEFORE CODE RUN
# echo "T is:$T "
# T='unga bunda'
# echo "T is:$T"

###GETTING VALUE FROM USER AND USING IT 
# echo "enter your name"
# read userName
# echo "a file with ${userName}_file name will be created"
# touch "${userName}_file"

###ESCAPING CHARS
# echo hello "*" world
# echo "A quote is \", backslash is \\, backtick is \`."
# X=10
# echo "A few spaces are   and dollar is \$. \$X is ${X}."
#backslashes escapes reserved 'character' to be used as a string

###LOOPS!!!

##FOR LOOPS
# for i in 1 2 3 4 5 
# do
#   echo "looping num $i"
# done
# for i in 1 2 3 4
# do 
#   echo 'anthing'
# done

# for i in hello 1 \* 2 goodbye
# do
#   echo "looping $i"
# done

##WHILE LOOP

# INPUT_STRING='hello'
# INPUT_STRING='hello2'
# # while [ "$INPUT_STRING" != "bye" ] #stop condtion
# # do
# #   echo "PLEASE TYPE SOMETHING IN (bye TO EXIT)"
# #   read INPUT_STRING
# #   echo "YOU TYPED $INPUT_STRING"
# # done
#
# while : #':' always evaluates true
# do
#   echo""
#   echo "#############################"
#   echo "TYPE ANYTHINGG (^C to quite)"
#   read INPUT_STRING
#   echo "ENTERED $INPUT_STRING"
#   echo "############################"
# done
LAYOUT="`setxkbmap -query | grep "layout:"`"
echo "$LAYOUT"
# if [  = 'us' ]; then
#   echo "hello"
# else
#   echo "X is not 5"
#   
# fi

