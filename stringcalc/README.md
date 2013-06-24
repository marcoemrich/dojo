The Spec
========

Make a class / string extension to fullfill the following specs:

 - returns 0 if the string is empty ("".calc => 0)
 - returns a number from the string ("3".calc()) => 3)
 - returns the sum of three comma separated numbers ("1,2,3".calc() => 6)
 - works with linebreaks ("1\n2,3".calc() => 6)
 - works with other - non comma - delimiters, introduced by a start line with // ("//;\n1;2".calc() => 3)
 - ignores numbers bigger than 1000
