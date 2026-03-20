# maximo
```
Input: x,n
max=x(1)
for i=2,...,n
    if max<x(i)
        max=x(i)
    end
end
return max
```

# minimo
```
Input: x,n
min=x(1)
for i=2,...,n
    if min>x(i)
        min=x(i)
    end
end
return min
```

# sort ascending
```
Input: x,n
for i=1,...,n-1
    min_i=i
    for j=i+1,...,n
        if x(min_i)>x(j)
            min_i=j
        end
    end
    temp=x(i)
    x(i)=x(min_i)
    x(min_i)=temp
end
return x
```

# sort descend
```
Input: x,n
for i=1,...,n-1
    max_i=i
    for j=i+1,...,n
        if x(max_i)<x(j)
            max_i=j
        end
    end
    temp=x(i)
    x(i)=x(max_i)
    x(max_i)=temp
end
return x
```

# mean
```
Input: x,n
sum=0
for i=1,...,n
    sum=sum+x(i)
end
media=sum/n
return media
```

# median
```
Input: x,n
x=sort_asc(x) 
if n%2==0
    mediana=(x(n/2)+x(n/2+1))/2
else
    mediana=x((n+1)/2)
end
return mediana
```

# mode
```
Input: x,n
moda=0
maxCount=0
for i=1,...,n
    count=0
    for j=1,...,n
        if x(i)==x(j)
            count=count+1
        end
    end
    if count>maxCount
        maxCount=count
        moda=x(i)
    end
end
return moda
```

# standard deviation
```
Input: x,n
media=mean(x,n)
sum=0
for i=1,...,n
    sum=sum+(x(i)-media)^2
end
des_est=sqrt(sum/(n-1))
return des_est
```

# all digits
```
Input: n
i=1
while n>0
     x(i)=mod(n,10)
     n=(n-x(i))/10
    i=i+1
end
for j=1,...,i-1
     y(j)=x(i-j)
end
return y,i-1
```

# reverse digits
```
Input: n
i=1
while n>=0
    x(i)=mod(n,10)
    n=(n-x(i))/10
    i=i+1
end
return x,i-1
```

# palindrome
```
Input: n
[x,i]=reverse_digits(n)
m=0
for j=1,...,i
     m=m+x(j)*10^(i-j)
end
if n==m
     print ‘es palindromo’
else
     print ‘no es palindromo’
end
```

# piece-wise function
```
Input: x

if x<=-1
y=x^2
Else
if x<1
    	y=x
    Else
    y=x^3
    end
End
Return y
```

# vectoria piece-wise function
```
Input: x,n
for i=1,...,n
    if x(i)<=-1
        y(i)=x(i)^2
    else
        if x(i)<1
            y(i)=x(i)
        Else
        y(i)=x(i)^3
        end
    end
End
Return y
```

# tridiagonal matrix
```
Input: a,b,c,n
for i=1,...,n
    for j=1,...,n
        A(i,j)=0
    end
end
for i=1,...,n
    A(i,i)=a
end

for i=1,...,n-1
    A(i,i+1)=b
end
for i=2,...,n
    A(i,i-1)=c
end
return A
```

# digito verificador del rut
```
Input: rut
[d,n]=reverse_digits(rut)
x=(2,3,4,5,6,7)
sum=0
j=1
for i=1,...,n
    sum=sum+d(i)*x(j)
    if j==6
        j=1
    else 
        j=j+1
    end
end
d_v=11-mod(sum,11)
if d_v == 10
    d_v = K
end
if d_v == 11
    d_v = 0
end
return d_v
```
