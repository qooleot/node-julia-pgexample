r2(r_square_vector)=(r_square_vector'*r_square_vector)

r2(x,y,res)=(y - x*res[2:end] + res[1])

function r2_total(x,y,res)
   z = y - (x*res[2:end] + res[1]);
   1 - z'*z
end
