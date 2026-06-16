# Reusa la función draw_cube definiéndola igual que en make_favicon, pero sin fondo (transparente)
from PIL import Image, ImageDraw
CREAM="#FBF2DE"; TOP="#F4B95E"; LEFT="#C9874B"; RIGHT="#E8A24C"; LINE=(91,70,50)
faces=[((60,20),(100,42),(20,42),TOP),((20,42),(60,64),(20,86),LEFT),((60,64),(100,42),(60,108),RIGHT)]
def corners(A,B,D):
    e1=(B[0]-A[0],B[1]-A[1]); e2=(D[0]-A[0],D[1]-A[1])
    C=(A[0]+e1[0]+e2[0],A[1]+e1[1]+e2[1]); return A,B,C,D,e1,e2
def draw_cube(sz, pad_frac=0.06):
    S=sz*8
    im=Image.new("RGBA",(S,S),(0,0,0,0)); d=ImageDraw.Draw(im)
    vx0,vy0,vw=8,12,104; pad=S*pad_frac; scale=(S-2*pad)/vw
    def P(p): return (pad+(p[0]-vx0)*scale, pad+(p[1]-vy0)*scale)
    lw=max(2,int(scale*3.2)); glw=max(1,int(scale*1.8))
    for A,B,D,col in faces:
        A,B,C,Dd,e1,e2=corners(A,B,D)
        poly=[P(A),P(B),P(C),P(Dd)]; d.polygon(poly,fill=col)
        for k in (1/3,2/3):
            p1=(A[0]+k*e1[0],A[1]+k*e1[1]); p2=(p1[0]+e2[0],p1[1]+e2[1])
            d.line([P(p1),P(p2)],fill=LINE+(180,),width=glw)
            q1=(A[0]+k*e2[0],A[1]+k*e2[1]); q2=(q1[0]+e1[0],q1[1]+e1[1])
            d.line([P(q1),P(q2)],fill=LINE+(180,),width=glw)
        d.line(poly+[poly[0]],fill=LINE+(255,),width=lw,joint="curve")
    return im.resize((sz,sz),Image.LANCZOS)
draw_cube(320).save("public/logo-cube.png")
print("logo-cube.png listo (transparente)")
