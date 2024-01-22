var state = ["Alabama","Alaska","Arizona","Arkansas","California",/*5*/
"Colorado","Connecticut","Delaware","Florida","Georgia",/*10*/
"Hawaii","Idaho","Illinois","Indiana","Iowa",/*15*/
"Kansas","Kentucky","Louisiana","Maine","Maryland",/*20*/
"Massachusetts","Michigan","Minnesota","Mississippi","Missouri",/*25*/
"Montana","Nebraska","Nevada","New Hampshire","New Jersey",/*30*/
"New Mexico","New York","North Carolina","North Dakota","Ohio",/*35*/
"Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina",/*40*/
"South Dakota","Tennessee","Texas","Utah","Vermont",/*45*/
"Virginia","Washington","WestVirginia","Wisconsin","Wyoming"];/*50*/
var height=[2.291288,3.834058,3.929377,6.236986,6.637771,
7.355270,8.027453,8.537564,10.860018,11.456439,
12.424975,12.614278,12.775367,13.044922,13.297368,
13.349157,13.896043,14.501034,15.407790,15.454449,
15.630099,15.890249,16.976749,18.264994,19.437592,
19.904271,21.167192,22.366046,22.766642,24.894377,
25.093027,28.635118,29.250641,31.477135,31.620405,
32.718802,36.734861,36.847931,38.527912,41.487950,
48.725148,53.593376,57.271022,64.993615,68.762272,
87.326342,102.861557,168.611417,293.622751];
var merge =[
[-15,-29],/*1x*/
[-17,-26],/*2*/
[-14,-16],/*3*/
[-13,-32],/*4*/
[-35,-44],/*5*/
[-36,-46],/*6*/
[-7,-38],/*7*/
[-19,-41],/*8*/
[-49,1],/*9x*/
[-21,-30],/*10*/
[-37,6],/*11*/
[-4,-42],/*12*/
[-48,8],/*13*/
[-34,-45],/*14*/
[-22,-28],/*15*/
[-27,2],/*16*/
[-3,-31],/*17*/
[-6,-43],/*18*/
[-12,3],/*19*/
[-1,-18],/*20*/
[-50,11],/*21*/
[-20,17],/*22*/
[-8,20],/*23*/
[5,7],/*24*/
[-23,9],/*25x*/
[16,19],/*26*/
[-24,-40],/*27*/
[4,15],/*28*/
[-47,10],/*29*/
[-25,12],/*30*/
[-10,18],/*31*/
[-2,27],/*32*/
[21,29],/*33*/
[24,26],/*34*/
[-11,25],/*35x*/
[-5,28],/*36*/
[30,31],/*37*/
[-39,33],/*38*/
[-9,-33],/*39*/
[13,14],/*40*/
[23,32],/*41*/
[22,36],/*42*/
[35,40],/*43x*/
[41,42],/*44*/
[37,38],/*45*/
[34,43],/*45*/
[39,44],/*47*/
[45,46],/*48*/
[47,48]];/*49*/
function progress(){
	var dis = document.form.dis.value;
	var target = document.form.target.value;
	var output="";
    /*----------------- Your Code Start-------------*/
	var ans = new Array(); 
	var x=0;
	var count=2;
	var targetvalue;
	var col=-1;
	var savecol1;
	var savecol2;
	var savecount;
	var finish;
	var start;
	
	//找城市號碼
	for(var i=0;;i++){
		if(target==state[i]){
			targetvalue=-1-i;
			break;
		}
	}
	
	//找號碼在第幾行
	for(var i=0;;i++){
		for(var j=0;j<2;j++){
			if(targetvalue==merge[i][j]){
				col=i;
				finish=col;
				if(merge[i][1]>0){
					start=merge[i][1]-1;
				}
				break;
			}
		}
		if(col!=-1)break;
	}
	//最底層開始的城市
	if(merge[finish][0]<0&&merge[finish][1]<0){
		ans[x]=state[-1-merge[col][0]];
		x+=1;
		ans[x]=state[-1-merge[col][1]];
		x+=1;
		while(a(col)<41&&count<dis){
			col=a(col);
			count+=1;
			
				savecol1=col;
				savecount=count;	
				if(merge[col][0]<0||merge[col][1]<0){
					ans[x]=state[-1-merge[col][0]];
					x+=1;
				}
					
				if(merge[col][0]>0&&merge[col][1]>0&&savecount<dis){
					savecol1=merge[col][0]-1;
					savecol2=merge[col][1]-1;
					
					if(merge[savecol1][0]<0&&merge[savecol1][1]<0&&merge[savecol2][0]<0&&merge[savecol2][1]<0){
						ans[x]=state[-1-merge[savecol1][0]];
						x+=1;
						ans[x]=state[-1-merge[savecol1][1]];
						x+=1;
						ans[x]=state[-1-merge[savecol2][0]];
						x+=1;
						ans[x]=state[-1-merge[savecol2][1]];
						x+=1;
					}
					if(merge[savecol1][1]>0||merge[savecol2][1]>0){
						if(savecount<dis){
							if(merge[savecol1][1]>0){
								ans[x]=state[-1-merge[savecol1][0]];
								x+=1;
								savecol1=merge[savecol1][1]-1;
							}
							else if(merge[savecol2][1]>0){
								ans[x]=state[-1-merge[savecol2][0]];
								x+=1;
								savecol1=merge[savecol2][1]-1;
							}
							if(savecount+1<dis){
								if(merge[savecol1][0]<0&&merge[savecol1][1]<0){
									if(savecount+1<dis){
										ans[x]=state[-1-merge[savecol1][0]];
										x+=1;
										ans[x]=state[-1-merge[savecol1][1]];
										x+=1;
									}
								}
								if(merge[savecol1][1]>0){
									ans[x]=state[-1-merge[savecol1][0]];
									x+=1;
									savecol2=merge[savecol1][1]-1;
									if(savecount+1<dis){
										ans[x]=state[-1-merge[savecol2][0]];
										x+=1;
										ans[x]=state[-1-merge[savecol2][1]];
										x+=1;
									}
								}
								
								
							}
						}
					}
					if((targetvalue==-41||targetvalue==-19)&&dis>=5){
						ans[x]=state[33];
						x+=1;
						ans[x]=state[44];
						x+=1;
					}
					if(targetvalue==-1||targetvalue==-18){
						if(dis>=5){
							ans[x]=state[1];
							x+=1;
						}
						if(dis>=6){
							ans[x]=state[23];
							x+=1;
						}
					}
					if(targetvalue==-26||targetvalue==-17){
						if(dis>=5){
							ans[x]=state[11];
							x+=1;
						}
						if(dis>=6){
							ans[x]=state[13];
							x+=1;
							ans[x]=state[15];
							x+=1;
						}
					}
					if(targetvalue==-35||targetvalue==-38||targetvalue==-44||targetvalue==-7){
						if(dis>=6){
							ans[x]=state[26];
							x+=1;
							ans[x]=state[11];
							x+=1;
						}
						if(dis>=7){
							ans[x]=state[16];
							x+=1;
							ans[x]=state[25];
							x+=1;
							ans[x]=state[13];
							x+=1;
							ans[x]=state[15];
							x+=1;
						}
					}
					if(targetvalue==-16||targetvalue==-17||targetvalue==-26||targetvalue==-14){
						if(dis>=7){
							ans[x]=state[34];
							x+=1;
							ans[x]=state[43];
							x+=1;							
						}
					}
						
				}
		}
	}
	
     //中間開始做
	if(merge[finish][0]<0&&merge[finish][1]>0){
		if(targetvalue==-12||targetvalue==-27){
			if(dis>=6){
				ans[x]=state[34];
				x+=1;
				ans[x]=state[43];
				x+=1;							
			}
		}
		if(targetvalue==-8){
			if(dis>=4){
				ans[x]=state[1];
				x+=1;
			}
			if(dis>=5){
				ans[x]=state[23];
				x+=1;
				ans[x]=state[39];
				x+=1;							
			}
		}
		if(targetvalue==-27){
			if(dis>=5){
				ans[x]=state[13];
				x+=1;
				ans[x]=state[15];
				x+=1;							
			}
			if(dis>=4){
				ans[x]=state[11];
				x+=1;						
			}
		}
		//往下
		while(merge[start][0]>0||merge[start][1]>0&&count+1<=dis){
			count+=1;
			if(merge[start][0]<0){
				ans[x]=state[-1-merge[start][0]];
				x+=1;
				start=merge[start][1]-1;
			}
			else if(merge[start][0]>0&&merge[start][1]>0){
				if(start==27&&dis>=4){
					ans[x]=state[12];
					x+=1;
					ans[x]=state[31];
					x+=1;
					ans[x]=state[22];
					x+=1;
					ans[x]=state[28];
					x+=1;
					start=-1;
					break;
				}
				if(start==32){
					if(dis>=4){
						ans[x]=state[49];
						x+=1;
						ans[x]=state[46];
						x+=1;
					}
					if(dis>=5){
						ans[x]=state[36];
						x+=1;
						ans[x]=state[29];
						x+=1;
						ans[x]=state[20];
						x+=1;
					}
					if(dis>=6){
						ans[x]=state[35];
						x+=1;
						ans[x]=state[45];
						x+=1;
					}
					start=-1;
					break;
				}
			}
				
		}
		if(start!=-1&&count<dis){
			ans[x]=state[-1-merge[start][0]];
			x+=1;
			ans[x]=state[-1-merge[start][1]];
			x+=1;
		}
		//往上
		count=2;
		while(a(col)<41&&count<dis){
			col=a(col);
			count+=1;
			
				savecol1=col;
				savecount=count;	
				if(merge[col][0]<0||merge[col][1]<0){
					ans[x]=state[-1-merge[col][0]];
					x+=1;
				}
				if(merge[col][0]>0&&merge[col][1]>0&&savecount<dis){
					savecol1=merge[col][0]-1;
					savecol2=merge[col][1]-1;
					if(merge[savecol1][0]<0&&merge[savecol1][1]<0){
						ans[x]=state[-1-merge[savecol1][0]];
						x+=1;
						ans[x]=state[-1-merge[savecol1][1]];
						x+=1;
					}
					if(merge[savecol2][0]<0&&merge[savecol2][1]<0){
						ans[x]=state[-1-merge[savecol2][0]];
						x+=1;
						ans[x]=state[-1-merge[savecol2][1]];
						x+=1;
					}
					if(merge[savecol1][0]<0&&merge[savecol1][1]<0&&merge[savecol2][0]<0&&merge[savecol2][1]<0){
						ans[x]=state[-1-merge[savecol1][0]];
						x+=1;
						ans[x]=state[-1-merge[savecol1][1]];
						x+=1;
						ans[x]=state[-1-merge[savecol2][0]];
						x+=1;
						ans[x]=state[-1-merge[savecol2][1]];
						x+=1;
					}
					else if(merge[savecol1][1]>0||merge[savecol2][1]>0){
						if(savecount<dis){
							if(merge[savecol1][1]>0){
								ans[x]=state[-1-merge[savecol1][0]];
								x+=1;
								savecol1=merge[savecol1][1]-1;
							}
							else if(merge[savecol2][1]>0){
								ans[x]=state[-1-merge[savecol2][0]];
								x+=1;
								savecol1=merge[savecol2][1]-1;
							}
							if(savecount+1<dis){
								if(merge[savecol1][0]<0&&merge[savecol1][1]<0){
									if(savecount+1<dis){
										ans[x]=state[-1-merge[savecol1][0]];
										x+=1;
										ans[x]=state[-1-merge[savecol1][1]];
										x+=1;
									}
								}
								if(merge[savecol1][1]>0){
									ans[x]=state[-1-merge[savecol1][0]];
									x+=1;
									savecol2=merge[savecol1][1]-1;
									if(savecount+1<dis){
										ans[x]=state[-1-merge[savecol2][0]];
										x+=1;
										ans[x]=state[-1-merge[savecol2][1]];
										x+=1;
									}
								}								
							}
						}
					}
				}
		}
	}
	
	

	for(var i=0;i<51;i++){
		for(var j=0;j<ans.length;j++){
			if(state[i]==ans[j]&&state[i]!=target){
				output+=state[i]+",";
				break;				
			}
		}
	}
	
	
    /*----------------- Your Code End --------------*/
    document.getElementById('out').innerHTML= output;
}

function a(begin){
	var num=-1;
	for(i=0;;i++){
		for(var j=0;j<2;j++){
			if(merge[i][j]==begin+1){
				num=i;
				break;
			}
		}
		if(num!=-1)break;
	}
	return num;
	
}
window.addEventListener( "load",progress, false );