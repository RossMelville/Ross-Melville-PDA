### Testing task 1 code:

  Carry out static testing on the code below.  
  Read through the code.  Comment any errors you can see without correcting them.

 
def func1 val 
  # def func1(val)
  if val = 1
    #val == 1
  return true
  else
  return false
  end
end
  
dif max a b
#def max(a, b)
  if a > b
      return a 
  else
  b
  end 
end 
end 
# only one end required
  
def looper 
  for i in 1..10
  puts i
  end
  # return i
end
 
failures = 0 
 
if looper == 10 
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
# end required
 
  
if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end 
 
  
if max(100,1) == 100 
  puts "max(100,1) passed"
else
  puts "func1(3) failed"
  failrues = failures + 1
  #failures = failures + 1
end

  
if failures # >0
  puts "Test Failed"
else
  puts "Test Passed"
end


