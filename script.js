const grades = [
      {id:1, group:'Primary', summary:'Counting, addition, subtraction', topics:'Numbers, shapes, patterns', questions:[
        {case:'Mia has 2 stickers and gets 3 more. How many stickers now?', options:['5','4','6','7'], correct:0, explain:'2 + 3 = 5.', diff:'Easy'},
        {case:'What is 7 - 3?', options:['4','3','5','6'], correct:0, explain:'7 - 3 = 4.', diff:'Easy'},
        {case:'Which number comes after 4?', options:['5','6','3','8'], correct:0, explain:'The next number after 4 is 5.', diff:'Easy'},
        {case:'How many sides does a triangle have?', options:['3','4','5','6'], correct:0, explain:'A triangle has 3 sides.', diff:'Easy'},
        {case:'Lina sees 2 birds, then 2 more join. Total birds?', options:['4','3','5','6'], correct:0, explain:'2 + 2 = 4.', diff:'Easy'},
        {case:'What is 8 + 2?', options:['10','12','9','11'], correct:0, explain:'8 + 2 = 10.', diff:'Medium'},
        {case:'What is 10 - 7?', options:['3','2','4','5'], correct:0, explain:'10 - 7 = 3.', diff:'Medium'},
        {case:'Which number is greater: 6 or 3?', options:['6','3','4','5'], correct:0, explain:'6 is greater than 3.', diff:'Medium'},
        {case:'How many legs do two cows have?', options:['8','6','4','10'], correct:0, explain:'2 cows × 4 legs = 8.', diff:'Medium'},
        {case:'What is 4 + 5?', options:['9','8','7','10'], correct:0, explain:'4 + 5 = 9.', diff:'Medium'},
        {case:'What is 3 + 7?', options:['10','11','9','8'], correct:0, explain:'3 + 7 = 10.', diff:'Hard'},
        {case:'Which is the smallest: 2, 5, 9, 7?', options:['2','5','7','9'], correct:0, explain:'2 is the smallest.', diff:'Hard'},
        {case:'What is 8 - 5?', options:['3','2','4','1'], correct:0, explain:'8 - 5 = 3.', diff:'Hard'},
        {case:'What is 6 + 4?', options:['10','9','11','12'], correct:0, explain:'6 + 4 = 10.', diff:'Hard'},
        {case:'If you have 5 apples and eat 2, how many remain?', options:['3','2','4','1'], correct:0, explain:'5 - 2 = 3.', diff:'Hard'}
      ]},
      {id:2, group:'Primary', summary:'Two-digit add/subtract, word problems', topics:'Place value, money, comparison', questions:[
        {case:'A class collected 12 pencils on Monday and 5 on Tuesday. Total?', options:['17','16','18','20'], correct:0, explain:'12 + 5 = 17.', diff:'Easy'},
        {case:'What is 20 - 8?', options:['12','11','13','14'], correct:0, explain:'20 - 8 = 12.', diff:'Easy'},
        {case:'15 + 4 = ?', options:['19','20','18','21'], correct:0, explain:'15 + 4 = 19.', diff:'Easy'},
        {case:'What is 30 - 15?', options:['15','14','16','17'], correct:0, explain:'30 - 15 = 15.', diff:'Easy'},
        {case:'Which number is greater: 25 or 19?', options:['25','19','22','30'], correct:0, explain:'25 is greater.', diff:'Easy'},
        {case:'What is 17 + 6?', options:['23','24','21','22'], correct:0, explain:'17 + 6 = 23.', diff:'Medium'},
        {case:'John has 10 candies and buys 7 more. How many now?', options:['17','18','15','19'], correct:0, explain:'10 + 7 = 17.', diff:'Medium'},
        {case:'Subtract 40 - 22.', options:['18','17','19','16'], correct:0, explain:'40 - 22 = 18.', diff:'Medium'},
        {case:'Add 13 + 14.', options:['27','28','26','29'], correct:0, explain:'13 + 14 = 27.', diff:'Medium'},
        {case:'Which number is smaller: 42 or 37?', options:['37','42','40','35'], correct:0, explain:'37 is smaller.', diff:'Medium'},
        {case:'What is 25 + 19?', options:['44','43','45','46'], correct:0, explain:'25 + 19 = 44.', diff:'Hard'},
        {case:'50 apples, 23 eaten. How many remain?', options:['27','26','28','25'], correct:0, explain:'50 - 23 = 27.', diff:'Hard'},
        {case:'What is 45 - 28?', options:['17','18','16','19'], correct:0, explain:'45 - 28 = 17.', diff:'Hard'},
        {case:'Sarah has 22 marbles and gets 15 more. How many now?', options:['37','36','38','39'], correct:0, explain:'22 + 15 = 37.', diff:'Hard'},
        {case:'Add 18 + 27.', options:['45','46','44','43'], correct:0, explain:'18 + 27 = 45.', diff:'Hard'}
      ]},
      {id:3, group:'Multiplication', summary:'Times tables and fractions', topics:'Arrays, sharing, equal groups', questions:[
        {case:'What is 3 × 4?', options:['12','9','6','14'], correct:0, explain:'3 × 4 = 12.', diff:'Easy'},
        {case:'What is 2 × 5?', options:['10','8','12','15'], correct:0, explain:'2 × 5 = 10.', diff:'Easy'},
        {case:'What is 9 ÷ 3?', options:['3','6','2','4'], correct:0, explain:'9 ÷ 3 = 3.', diff:'Easy'},
        {case:'Which fraction is larger: 1/2 or 1/4?', options:['1/2','1/4','3/4','2/3'], correct:0, explain:'1/2 is larger.', diff:'Easy'},
        {case:'What is 8 ÷ 2?', options:['4','3','5','6'], correct:0, explain:'8 ÷ 2 = 4.', diff:'Easy'},
        {case:'What is 6 × 5?', options:['30','25','35','40'], correct:0, explain:'6 × 5 = 30.', diff:'Medium'},
        {case:'What is 12 ÷ 4?', options:['3','4','2','6'], correct:0, explain:'12 ÷ 4 = 3.', diff:'Medium'},
        {case:'Which fraction equals 2/4?', options:['1/2','3/4','4/2','2/2'], correct:0, explain:'2/4 simplifies to 1/2.', diff:'Medium'},
        {case:'Multiply 7 × 3.', options:['21','18','24','27'], correct:0, explain:'7 × 3 = 21.', diff:'Medium'},
        {case:'Divide 15 ÷ 5.', options:['3','4','2','5'], correct:0, explain:'15 ÷ 5 = 3.', diff:'Medium'},
        {case:'What is 9 × 6?', options:['54','45','48','56'], correct:0, explain:'9 × 6 = 54.', diff:'Hard'},
        {case:'Divide 36 ÷ 6.', options:['6','7','5','8'], correct:0, explain:'36 ÷ 6 = 6.', diff:'Hard'},
        {case:'Which is larger: 3/5 or 2/3?', options:['2/3','3/5','1/2','4/5'], correct:0, explain:'2/3 is larger.', diff:'Hard'},
        {case:'Multiply 8 × 7.', options:['56','49','64','48'], correct:0, explain:'8 × 7 = 56.', diff:'Hard'},
        {case:'A pizza is cut into 8 slices and 3 are eaten. Fraction left?', options:['5/8','3/8','1/2','4/8'], correct:0, explain:'5 of 8 slices remain.', diff:'Hard'}
      ]},
      {id:4, group:'Fractions & Measurement', summary:'Multi-digit operations and units', topics:'Length, mass, capacity, fractions', questions:[
        {case:'What is 23 + 19?', options:['42','41','43','40'], correct:0, explain:'23 + 19 = 42.', diff:'Easy'},
        {case:'What is 50 - 27?', options:['23','24','22','25'], correct:0, explain:'50 - 27 = 23.', diff:'Easy'},
        {case:'Which is bigger: 3/4 or 2/5?', options:['3/4','2/5','1/2','2/3'], correct:0, explain:'3/4 is bigger.', diff:'Easy'},
        {case:'Convert 1 meter to centimeters.', options:['100','10','1','1000'], correct:0, explain:'1 m = 100 cm.', diff:'Easy'},
        {case:'Multiply 6 × 7.', options:['42','36','48','40'], correct:0, explain:'6 × 7 = 42.', diff:'Easy'},
        {case:'Divide 56 ÷ 8.', options:['7','8','6','9'], correct:0, explain:'56 ÷ 8 = 7.', diff:'Medium'},
        {case:'What is 125 - 64?', options:['61','59','62','60'], correct:0, explain:'125 - 64 = 61.', diff:'Medium'},
        {case:'What is 38 + 47?', options:['85','84','86','83'], correct:0, explain:'38 + 47 = 85.', diff:'Medium'},
        {case:'Which fraction equals 4/8?', options:['1/2','3/4','2/4','4/4'], correct:0, explain:'4/8 simplifies to 1/2.', diff:'Medium'},
        {case:'How many millimeters in 5 centimeters?', options:['50','5','500','25'], correct:0, explain:'5 cm = 50 mm.', diff:'Medium'},
        {case:'Multiply 23 × 3.', options:['69','66','72','63'], correct:0, explain:'23 × 3 = 69.', diff:'Hard'},
        {case:'Divide 144 ÷ 12.', options:['12','11','14','13'], correct:0, explain:'144 ÷ 12 = 12.', diff:'Hard'},
        {case:'Convert 2500 milliliters to liters.', options:['2.5','25','0.25','250'], correct:0, explain:'2500 mL = 2.5 L.', diff:'Hard'},
        {case:'What is 96 - 57?', options:['39','40','38','41'], correct:0, explain:'96 - 57 = 39.', diff:'Hard'},
        {case:'3/4 of a cake, then eat 1/8. What remains?', options:['5/8','1/2','2/3','3/8'], correct:0, explain:'6/8 - 1/8 = 5/8.', diff:'Hard'}
      ]},
      {id:5, group:'Decimals & Factors', summary:'Decimals, primes, GCF/LCM', topics:'Divisibility and patterns', questions:[
        {case:'What is 3.5 + 2.5?', options:['6','5','7','6.5'], correct:0, explain:'3.5 + 2.5 = 6.', diff:'Easy'},
        {case:'What is 0.7 + 0.2?', options:['0.9','0.8','1.0','0.7'], correct:0, explain:'0.7 + 0.2 = 0.9.', diff:'Easy'},
        {case:'Find a factor of 12 other than 1.', options:['3','7','13','17'], correct:0, explain:'3 is a factor of 12.', diff:'Easy'},
        {case:'Which number is prime: 5, 9, 15, 21?', options:['5','9','15','21'], correct:0, explain:'5 is prime.', diff:'Easy'},
        {case:'What is 20 ÷ 4 + 3?', options:['8','7','6','9'], correct:0, explain:'20 ÷ 4 = 5, then +3 = 8.', diff:'Easy'},
        {case:'Multiply 6.2 × 10.', options:['62','6.2','620','16.2'], correct:0, explain:'Multiply by 10 moves the decimal one place.', diff:'Medium'},
        {case:'What is 15% of 200?', options:['30','25','20','35'], correct:0, explain:'15% of 200 = 30.', diff:'Medium'},
        {case:'Which is a factor of 36: 7, 6, 13, 9?', options:['6','7','13','9'], correct:0, explain:'6 divides 36 evenly.', diff:'Medium'},
        {case:'Add 7/10 + 2/10.', options:['9/10','7/20','1/2','1'], correct:0, explain:'7/10 + 2/10 = 9/10.', diff:'Medium'},
        {case:'Which number is prime: 11, 14, 21, 27?', options:['11','14','21','27'], correct:0, explain:'11 is prime.', diff:'Medium'},
        {case:'What is 4.5 × 3?', options:['13.5','14.5','12.5','15'], correct:0, explain:'4.5 × 3 = 13.5.', diff:'Hard'},
        {case:'Simplify 30 ÷ (5 × 2).', options:['3','6','2','5'], correct:0, explain:'5 × 2 = 10, then 30 ÷ 10 = 3.', diff:'Hard'},
        {case:'Greatest common factor of 18 and 24?', options:['6','3','12','9'], correct:0, explain:'The GCF is 6.', diff:'Hard'},
        {case:'Which decimal is larger: 0.56 or 0.65?', options:['0.65','0.56','0.60','0.66'], correct:0, explain:'0.65 is larger.', diff:'Hard'},
        {case:'Which number is divisible by 3 and 5?', options:['15','22','27','35'], correct:0, explain:'15 is divisible by both 3 and 5.', diff:'Hard'}
      ]},
      {id:6, group:'Ratios & Integers', summary:'Ratios, percentages, negatives', topics:'Real-world comparisons and equations', questions:[
        {case:'What is 25% of 80?', options:['20','25','15','30'], correct:0, explain:'25% of 80 is 20.', diff:'Easy'},
        {case:'Simplify the ratio 6:9.', options:['2:3','3:5','3:4','1:2'], correct:0, explain:'6:9 simplifies to 2:3.', diff:'Easy'},
        {case:'What is -5 + 3?', options:['-2','2','-8','8'], correct:0, explain:'-5 + 3 = -2.', diff:'Easy'},
        {case:'Solve x + 7 = 12.', options:['5','7','12','6'], correct:0, explain:'x = 5.', diff:'Easy'},
        {case:'Which is greater: -2 or -5?', options:['-2','-5','0','2'], correct:0, explain:'-2 is greater.', diff:'Easy'},
        {case:'What is 40% of 150?', options:['60','50','70','80'], correct:0, explain:'40% of 150 = 60.', diff:'Medium'},
        {case:'Simplify 15:45.', options:['1:3','1:4','3:5','2:3'], correct:0, explain:'Divide both by 15.', diff:'Medium'},
        {case:'Solve 3x = 12.', options:['4','3','5','6'], correct:0, explain:'x = 4.', diff:'Medium'},
        {case:'What is 8 - (-3)?', options:['11','5','-5','10'], correct:0, explain:'Subtracting a negative adds 3.', diff:'Medium'},
        {case:'Smallest value: -10, -3, 0, 5?', options:['-10','-3','0','5'], correct:0, explain:'-10 is smallest.', diff:'Medium'},
        {case:'Solve 2(x - 5) = 10.', options:['10','5','-5','15'], correct:0, explain:'x = 10.', diff:'Hard'},
        {case:'What is 35% of 200?', options:['70','50','60','80'], correct:0, explain:'35% of 200 = 70.', diff:'Hard'},
        {case:'Cats to dogs ratio 4:5. If cats = 20, dogs = ?', options:['25','24','30','35'], correct:0, explain:'If 4 parts = 20, then 1 part = 5. Dogs = 25.', diff:'Hard'},
        {case:'Solve -3x = 9.', options:['-3','3','-9','9'], correct:0, explain:'x = -3.', diff:'Hard'},
        {case:'Which is greater: 7/8 or 0.85?', options:['7/8','0.85','1/2','0.8'], correct:0, explain:'7/8 = 0.875, so it is greater.', diff:'Hard'}
      ]},
      {id:7, group:'Expressions', summary:'Algebra basics and geometry', topics:'Angles, area, perimeter', questions:[
        {case:'Simplify 3(2 + 4).', options:['18','12','15','16'], correct:0, explain:'3 × 6 = 18.', diff:'Easy'},
        {case:'What is -7 + 10?', options:['3','-3','17','-17'], correct:0, explain:'-7 + 10 = 3.', diff:'Easy'},
        {case:'Evaluate 5^2.', options:['25','10','20','15'], correct:0, explain:'5^2 = 25.', diff:'Easy'},
        {case:'How many degrees in a right angle?', options:['90','45','180','60'], correct:0, explain:'A right angle is 90°.', diff:'Easy'},
        {case:'Area of rectangle 5 by 3?', options:['15','8','20','10'], correct:0, explain:'Area = 15.', diff:'Easy'},
        {case:'Simplify 8 - 3^2.', options:['-1','1','5','-5'], correct:0, explain:'8 - 9 = -1.', diff:'Medium'},
        {case:'What is -4 × -6?', options:['24','-24','-10','12'], correct:0, explain:'Negative × negative = positive.', diff:'Medium'},
        {case:'Solve 2x - 3 = 7.', options:['5','7','2','3'], correct:0, explain:'x = 5.', diff:'Medium'},
        {case:'What is 4! ?', options:['24','8','12','16'], correct:0, explain:'4! = 24.', diff:'Medium'},
        {case:'How many sides does a hexagon have?', options:['6','5','7','8'], correct:0, explain:'A hexagon has 6 sides.', diff:'Medium'},
        {case:'Simplify 2(3x - 4).', options:['6x - 8','6x - 4','3x - 8','6x + 4'], correct:0, explain:'Distribute 2.', diff:'Hard'},
        {case:'Perimeter of triangle 5, 7, 9?', options:['21','20','22','23'], correct:0, explain:'Add all sides.', diff:'Hard'},
        {case:'Solve 4 - (2 - 3x) = 10.', options:['8/3','3','4','6'], correct:0, explain:'x = 8/3.', diff:'Hard'},
        {case:'Supplement of 65°?', options:['115°','35°','125°','145°'], correct:0, explain:'180 - 65 = 115.', diff:'Hard'},
        {case:'Circumference of radius 4 (π≈3.14)?', options:['25.12','24','12.56','50.24'], correct:0, explain:'2πr = 25.12.', diff:'Hard'}
      ]},
      {id:8, group:'Linear Equations', summary:'Exponents, radicals, graphs', topics:'Slope, roots, functions', questions:[
        {case:'Solve 2x + 4 = 10.', options:['3','2','4','5'], correct:0, explain:'x = 3.', diff:'Easy'},
        {case:'What is 3^3?', options:['27','9','6','18'], correct:0, explain:'3^3 = 27.', diff:'Easy'},
        {case:'Simplify √36.', options:['6','5','7','4'], correct:0, explain:'√36 = 6.', diff:'Easy'},
        {case:'Slope of y = 3x + 2?', options:['3','2','1','-3'], correct:0, explain:'Slope is 3.', diff:'Easy'},
        {case:'Calculate 2^4.', options:['16','8','12','32'], correct:0, explain:'2^4 = 16.', diff:'Easy'},
        {case:'Solve 5x - 7 = 3x + 5.', options:['6','5','4','7'], correct:0, explain:'x = 6.', diff:'Medium'},
        {case:'Simplify 9^(1/2).', options:['3','4','2','6'], correct:0, explain:'9^(1/2)=3.', diff:'Medium'},
        {case:'Find y-intercept of y = -2x + 7.', options:['7','-2','2','-7'], correct:0, explain:'Intercept is 7.', diff:'Medium'},
        {case:'What is √81?', options:['9','8','7','10'], correct:0, explain:'√81 = 9.', diff:'Medium'},
        {case:'Solve 4(x + 2) = 20.', options:['3','4','5','6'], correct:0, explain:'x = 3.', diff:'Medium'},
        {case:'Positive solution of x^2 = 49?', options:['7','-7','8','6'], correct:0, explain:'x = 7.', diff:'Hard'},
        {case:'What is 2^(-3)?', options:['1/8','8','-8','1/6'], correct:0, explain:'2^-3 = 1/8.', diff:'Hard'},
        {case:'Simplify √64 + 2^3.', options:['16','12','14','10'], correct:0, explain:'8 + 8 = 16.', diff:'Hard'},
        {case:'Solve y = 4x - 8 when y=0.', options:['2','1','4','8'], correct:0, explain:'x = 2.', diff:'Hard'},
        {case:'Equation through (0,5) slope -1?', options:['y = -x + 5','y = x + 5','y = -x - 5','y = x - 5'], correct:0, explain:'Use y = mx + b.', diff:'Hard'}
      ]},
      {id:9, group:'Functions & Probability', summary:'Algebra foundations, geometry, chance', topics:'Graphs, triangles, dice', questions:[
        {case:'Solve 3x - 9 = 0.', options:['3','0','9','-3'], correct:0, explain:'x = 3.', diff:'Easy'},
        {case:'Midpoint between 2 and 10?', options:['6','5','8','7'], correct:0, explain:'Average is 6.', diff:'Easy'},
        {case:'Simplify 2(x + 3) - x.', options:['x + 6','2x + 6','x + 3','3x + 3'], correct:0, explain:'Simplifies to x + 6.', diff:'Easy'},
        {case:'Slope through (2,3) and (4,7)?', options:['2','4','1','3'], correct:0, explain:'Slope = 2.', diff:'Easy'},
        {case:'Probability of rolling a 3 on a fair die?', options:['1/6','1/3','1/2','2/6'], correct:0, explain:'One favorable outcome out of six.', diff:'Easy'},
        {case:'Solve x/3 + 5 = 9.', options:['12','9','3','6'], correct:0, explain:'x = 12.', diff:'Medium'},
        {case:'If f(x)=x^2, find f(4).', options:['16','8','12','14'], correct:0, explain:'f(4)=16.', diff:'Medium'},
        {case:'Hypotenuse of legs 3 and 4?', options:['5','6','7','8'], correct:0, explain:'3-4-5 triangle.', diff:'Medium'},
        {case:'If rain probability is 0.3, no-rain probability?', options:['0.7','0.3','0.4','0.5'], correct:0, explain:'1 - 0.3 = 0.7.', diff:'Medium'},
        {case:'Solve 2(3x - 2) = 4x + 10.', options:['7','5','6','8'], correct:0, explain:'x = 7.', diff:'Medium'},
        {case:'Simplify (x + 2)(x - 5).', options:['x^2 - 3x - 10','x^2 + x - 10','x^2 + 7x + 10','x^2 - 7x + 10'], correct:0, explain:'Multiply and combine like terms.', diff:'Hard'},
        {case:'Triangle angles 35° and 65°. Third angle?', options:['80°','90°','100°','70°'], correct:0, explain:'180 - 100 = 80.', diff:'Hard'},
        {case:'Probability of two heads in two coin flips?', options:['1/4','1/2','1/3','1/6'], correct:0, explain:'1/2 × 1/2 = 1/4.', diff:'Hard'},
        {case:'Solve x^2 - 4x - 5 = 0.', options:['5 and -1','5 and 1','-5 and 1','-5 and -1'], correct:0, explain:'Factors to (x-5)(x+1)=0.', diff:'Hard'},
        {case:'Equation y = 1/2x + b through (4,6). Find b.', options:['4','2','3','5'], correct:0, explain:'b = 4.', diff:'Hard'}
      ]},
      {id:10, group:'Quadratics & Trig', summary:'Quadratics, systems, trigonometry intro', topics:'Roots, slope, sine/cosine', questions:[
        {case:'Positive solution of x^2 = 16?', options:['4','-4','8','-8'], correct:0, explain:'x = 4.', diff:'Easy'},
        {case:'Roots of x^2 - 9 = 0?', options:['3 and -3','9 and -9','1 and -1','0 and 9'], correct:0, explain:'x = ±3.', diff:'Easy'},
        {case:'sin(30°)?', options:['0.5','0.3','1','0.75'], correct:0, explain:'sin 30° = 1/2.', diff:'Easy'},
        {case:'Solve 2x + y = 10 for y.', options:['10 - 2x','2x + 10','x - 10','10 + 2x'], correct:0, explain:'y = 10 - 2x.', diff:'Easy'},
        {case:'cos(60°)?', options:['0.5','1','0','0.25'], correct:0, explain:'cos 60° = 1/2.', diff:'Easy'},
        {case:'Solve system x + y = 7, x - y = 1.', options:['x=4,y=3','x=3,y=4','x=5,y=2','x=2,y=5'], correct:0, explain:'x=4, y=3.', diff:'Medium'},
        {case:'Solve x^2 - 6x + 8 = 0.', options:['2 and 4','1 and 8','-2 and -4','2 and -4'], correct:0, explain:'Factors to (x-2)(x-4).', diff:'Medium'},
        {case:'tan(45°)?', options:['1','0','√2','0.5'], correct:0, explain:'tan 45° = 1.', diff:'Medium'},
        {case:'Solve 3x - 2y = 4 for y.', options:['(3x - 4)/2','(3x + 4)/2','(4x - 3)/2','(4 - 3x)/2'], correct:0, explain:'Rearrange to y=(3x-4)/2.', diff:'Medium'},
        {case:'Negative solution of x^2 = 25?', options:['-5','5','-25','25'], correct:0, explain:'x = -5.', diff:'Medium'},
        {case:'Solve x^2 + 2x - 8 = 0.', options:['-4 and 2','4 and -2','-2 and -4','2 and 4'], correct:0, explain:'Factors to (x+4)(x-2).', diff:'Hard'},
        {case:'sin(90°)?', options:['1','0','0.5','-1'], correct:0, explain:'sin 90° = 1.', diff:'Hard'},
        {case:'Solve 2x + 3y = 12 and 3x - y = 5.', options:['x≈2.45, y≈2.36','x=3,y=2','x=2,y=3','x=5,y=1'], correct:0, explain:'Solve simultaneously.', diff:'Hard'},
        {case:'cos(0°)?', options:['1','0','-1','0.5'], correct:0, explain:'cos 0° = 1.', diff:'Hard'},
        {case:'Solve x^2 - 10x + 21 = 0.', options:['3 and 7','-3 and -7','3 and -7','7 and -3'], correct:0, explain:'Factors to (x-3)(x-7).', diff:'Hard'}
      ]},
      {id:11, group:'Advanced Algebra', summary:'Sequences, statistics, logarithms', topics:'Patterns, mean/median, exponents', questions:[
        {case:'Common ratio of 2, 6, 18, 54?', options:['3','2','4','6'], correct:0, explain:'Multiply by 3 each time.', diff:'Easy'},
        {case:'5th term of 4, 7, 10, ... ?', options:['16','13','19','22'], correct:0, explain:'Arithmetic sequence, +3 each time.', diff:'Easy'},
        {case:'If f(x)=3x+2, find f(5).', options:['17','15','16','13'], correct:0, explain:'3(5)+2=17.', diff:'Easy'},
        {case:'Mean of 4, 8, 12, 16?', options:['10','12','8','15'], correct:0, explain:'Sum 40 ÷ 4 = 10.', diff:'Easy'},
        {case:'log10(100)?', options:['2','1','0','3'], correct:0, explain:'10^2 = 100.', diff:'Easy'},
        {case:'Simplify (x^3)(x^2).', options:['x^5','x^6','x^4','x^2'], correct:0, explain:'Add exponents: 3+2=5.', diff:'Medium'},
        {case:'Median of 5,7,9,11,13,15,17?', options:['11','9','13','15'], correct:0, explain:'Middle value is 11.', diff:'Medium'},
        {case:'Solve ln(e^x)=5.', options:['5','e^5','1/5','5e'], correct:0, explain:'ln and e cancel.', diff:'Medium'},
        {case:'Variance of {2,4,6,8}?', options:['5','4','6','8'], correct:0, explain:'Mean 5, average squared deviation = 5.', diff:'Medium'},
        {case:'Sum of first 6 terms if a1=3, d=2?', options:['48','36','45','54'], correct:0, explain:'Use arithmetic series formula.', diff:'Medium'},
        {case:'Simplify (2x^2 - 3x + 1) - (x^2 + x - 4).', options:['x^2 - 4x + 5','x^2 + 2x + 5','3x^2 - 4x - 5','x^2 - 2x + 3'], correct:0, explain:'Subtract term by term.', diff:'Hard'},
        {case:'8th term of geometric sequence: first term 2, ratio 1/2?', options:['1/64','1/32','1/16','1/8'], correct:0, explain:'a8 = 2*(1/2)^7 = 1/64.', diff:'Hard'},
        {case:'Solve 3^x = 81.', options:['4','3','5','2'], correct:0, explain:'81 = 3^4.', diff:'Hard'},
        {case:'Vertex of f(x)=x^2-6x+9?', options:['(3,0)','(6,9)','(0,9)','(9,0)'], correct:0, explain:'(x-3)^2, so vertex is (3,0).', diff:'Hard'},
        {case:'Odds in favor of event with probability 0.2?', options:['1:4','4:1','2:5','5:2'], correct:0, explain:'1 favorable, 4 unfavorable => 1:4.', diff:'Hard'}
      ]},
      {id:12, group:'Calculus Prep', summary:'Derivatives, integrals, limits, probability', topics:'Change, area, probability', questions:[
        {case:'Differentiate f(x)=x^2.', options:['2x','x','x^2','3x'], correct:0, explain:'Derivative is 2x.', diff:'Easy'},
        {case:'Derivative of f(x)=3x^3?', options:['9x^2','3x^2','6x^2','9x'], correct:0, explain:'Use power rule.', diff:'Easy'},
        {case:'lim x→0 (sin x / x)?', options:['1','0','∞','x'], correct:0, explain:'A classic limit equals 1.', diff:'Easy'},
        {case:'Solve ln(x)=0.', options:['1','0','e','-1'], correct:0, explain:'ln(1)=0.', diff:'Easy'},
        {case:'Integrate ∫2x dx.', options:['x^2 + C','2x + C','x + C','x^2/2 + C'], correct:0, explain:'Integral of 2x is x^2 + C.', diff:'Easy'},
        {case:'Derivative of e^x?', options:['e^x','xe^{x-1}','xe^x','e^{x+1}'], correct:0, explain:'Derivative of e^x is e^x.', diff:'Medium'},
        {case:'Evaluate ∫0^2 x^2 dx.', options:['8/3','4','2','16/3'], correct:0, explain:'Antiderivative x^3/3 from 0 to 2.', diff:'Medium'},
        {case:'Solve e^{2x}=7.', options:['(ln 7)/2','2 ln 7','ln 7','7 ln 2'], correct:0, explain:'Take ln both sides.', diff:'Medium'},
        {case:'Second derivative of x^3?', options:['6x','3x^2','9x^2','6'], correct:0, explain:'First derivative 3x^2, second 6x.', diff:'Medium'},
        {case:'Determinant |1 2; 3 4| ?', options:['-2','2','-1','1'], correct:0, explain:'1×4 - 2×3 = -2.', diff:'Medium'},
        {case:'Differentiate ln(x^2 + 1).', options:['2x/(x^2 + 1)','1/(x^2 + 1)','x/(x^2 + 1)','2/(x^2 + 1)'], correct:0, explain:'Chain rule.', diff:'Hard'},
        {case:'Evaluate ∫ 1/x dx.', options:['ln|x| + C','1/(x^2) + C','x + C','x^{-1} + C'], correct:0, explain:'Integral of 1/x is ln|x| + C.', diff:'Hard'},
        {case:'Area under f(x)=3x from 0 to 4?', options:['24','12','18','36'], correct:0, explain:'Integrate 3x from 0 to 4.', diff:'Hard'},
        {case:'If 2^x = 5, x = ?', options:['log₂ 5','2 log 5','5 log₂','log 5'], correct:0, explain:'Take log base 2.', diff:'Hard'},
        {case:'Probability of drawing an Ace from 52 cards?', options:['1/13','1/4','1/26','4/13'], correct:0, explain:'4/52 = 1/13.', diff:'Hard'}
      ]}
    ];

    const bossChallenge = [
      {case:'A school survey shows 120 students prefer music, sports, or art. 45 like music, 30 like sports, and the rest like art. What fraction prefer art?', options:['3/8','1/2','1/4','1/3'], correct:0, explain:'45 + 30 = 75, so 45 like art. 45/120 = 3/8.', diff:'Boss'},
      {case:'A farmer packs apples in boxes of 12. He has 95 apples. How many full boxes and apples left?', options:['7 full boxes, 11 left','8 full boxes, 3 left','7 full boxes, 7 left','6 full boxes, 23 left'], correct:0, explain:'95 ÷ 12 = 7 remainder 11.', diff:'Boss'},
      {case:'A graph rises from 10 to 22 over 4 hours. What is the average rate of change?', options:['3 per hour','4 per hour','2 per hour','5 per hour'], correct:0, explain:'(22 - 10) / 4 = 3.', diff:'Boss'},
      {case:'A discount of 20% is applied to a ₹500 item. Then 5% tax is added to the discounted price. Final price?', options:['₹420','₹400','₹420.00 with no tax','₹525'], correct:0, explain:'500 → 400 after discount; 5% tax makes 420.', diff:'Boss'},
      {case:'A sequence starts 3, 6, 12, 24. What is the 8th term?', options:['384','192','256','128'], correct:0, explain:'It doubles each time: 3×2^7 = 384.', diff:'Boss'}
    ];

    const dailyQuestionBank = [
      {
        text:'A rectangle has a perimeter of 30 cm. Its length is 9 cm. What is its width?',
        answer:'Because P = 2(L + W), 30 = 2(9 + W). So 15 = 9 + W and W = 6 cm.'
      },
      {
        text:'What is 15% of 200?',
        answer:'15% of 200 is 30, because 0.15 × 200 = 30.'
      },
      {
        text:'A pencil costs ₹8. How much do 4 pencils cost?',
        answer:'4 × 8 = ₹32.'
      },
      {
        text:'What comes next in the pattern 5, 10, 15, 20, ...?',
        answer:'The pattern adds 5 each time, so the next term is 25.'
      },
      {
        text:'A class has 12 girls and 8 boys. How many students are there?',
        answer:'12 + 8 = 20 students.'
      },
      {
        text:'What is 3/4 of 20?',
        answer:'3/4 of 20 is 15.'
      },
      {
        text:'A jar has 18 marbles. 6 are removed. How many remain?',
        answer:'18 - 6 = 12 marbles remain.'
      },
      {
        text:'What is the value of 7 × 6?',
        answer:'7 × 6 = 42.'
      }
    ];

    function getDailyQuestion(date = new Date()) {
      const dayKey = Math.floor(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86400000);
      return dailyQuestionBank[Math.abs(dayKey) % dailyQuestionBank.length];
    }

    function getWeekNumber(date = new Date()) {
      const temp = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
      const dayNum = temp.getUTCDay() || 7;
      temp.setUTCDate(temp.getUTCDate() + 4 - dayNum);
      const yearStart = new Date(Date.UTC(temp.getUTCFullYear(), 0, 1));
      return Math.ceil((((temp - yearStart) / 86400000) + 1) / 7);
    }

    function getRollingWeeklyChallenges(date = new Date()) {
      const weekIndex = Math.max(0, getWeekNumber(date) - 1);
      const start = weekIndex % weeklyChallenges.length;
      return [0, 1, 2].map(offset => weeklyChallenges[(start + offset) % weeklyChallenges.length]);
    }

    function getProfile() {
      const stored = JSON.parse(localStorage.getItem('ams_user') || '{}');
      return {
        name: stored.name || localStorage.getItem('ams_userName') || '',
        level: stored.level || localStorage.getItem('ams_userLevel') || ''
      };
    }


    function getQuestionHint(text = '') {
      const t = String(text).toLowerCase();
      if (t.includes('+') || t.includes('add') || t.includes('plus') || t.includes('sum') || t.includes('total') || t.includes('more') || t.includes('together') || t.includes('combined') || t.includes('in all') || t.includes('altogether')) return 'Look for the numbers to combine, then add them carefully.';
      if (t.includes('-') || t.includes('subtract') || t.includes('minus') || t.includes('left') || t.includes('remain') || t.includes('remaining') || t.includes('fewer') || t.includes('difference') || t.includes('take away') || t.includes('after removing')) return 'Look for what is being taken away or what remains.';
      if (t.includes('×') || t.includes('times') || t.includes('multiply') || t.includes('product') || t.includes('groups of') || t.includes('each')) return 'Think of equal groups or repeated addition.';
      if (t.includes('÷') || t.includes('divide') || t.includes('shared') || t.includes('split') || t.includes('per') || t.includes('each gets') || t.includes('how many groups')) return 'Divide into equal parts and check whether it fits evenly.';
      if (t.includes('fraction') || t.includes('/')) return 'Compare the parts and think about the size of each fraction.';
      if (t.includes('percent') || t.includes('%')) return 'Convert the percent into “out of 100” before solving.';
      if (t.includes('ratio') || t.includes('proportion')) return 'Keep the two parts in the same ratio and scale both sides together.';
      if (t.includes('equation') || t.includes('solve') || /\bx\b/.test(t) || /\by\b/.test(t)) return 'Do the same operation on both sides until the variable stands alone.';
      if (t.includes('angle') || t.includes('degrees') || t.includes('triangle') || t.includes('circle') || t.includes('perimeter') || t.includes('area')) return 'Use the matching geometry rule and label the key measurements first.';
      if (t.includes('probability') || t.includes('chance') || t.includes('likely') || t.includes('die') || t.includes('coin')) return 'Count the favorable outcomes and divide by the total outcomes.';
      if (t.includes('mean') || t.includes('median') || t.includes('mode') || t.includes('average') || t.includes('data') || t.includes('graph') || t.includes('table')) return 'Organize the data first, then use the correct data rule.';
      if (t.includes('decimal') || t.includes('tenths') || t.includes('hundredths')) return 'Line up the decimal places before you calculate.';
      return 'Read the question slowly and circle the key numbers before you choose.';
    }

    function getStepByStep(text = '', explanation = '') {
      const hint = getQuestionHint(text);
      const steps = [
        'Step 1: Read the problem carefully and identify the important numbers or words.',
        `Step 2: Use the right strategy: ${hint}`,
        `Step 3: Check the result carefully: ${explanation || 'make sure it matches the question.'}`
      ];
      return steps;
    }

    function updateProfileStatus() {
      const el = document.getElementById('profileStatus');
      if (!el) return;
      if (state.userName) {
        el.textContent = `Saved profile: ${state.userName}${state.userLevel ? ' · ' + state.userLevel : ''}`;
      } else {
        el.textContent = 'No profile saved yet.';
      }
    }

    const badgeCatalog = [
      {id:'explorer', name:'Grade Explorer', icon:'📘', desc:'Finish any grade assignment'},
      {id:'streak', name:'Streak Builder', icon:'🔥', desc:'Get 3 correct in a row'},
      {id:'data', name:'Data Detective', icon:'📊', desc:'Complete a data challenge'},
      {id:'vault', name:'Panda Vault Solver', icon:'🔐', desc:'Complete the ultra-challenge'},
      {id:'accuracy', name:'Accuracy Boost', icon:'🌟', desc:'Score 80% or above'},
    ];

    const practiceQuickQuiz = [
      {case:'A fruit stall sold 18 apples in the morning and 14 in the afternoon. How many apples were sold?', options:['32','30','31','34'], correct:0, explain:'18 + 14 = 32.', diff:'Quick'},
      {case:'What is 3/4 of 20?', options:['15','12','10','18'], correct:0, explain:'20 × 3/4 = 15.', diff:'Quick'},
      {case:'A square has side 6 cm. What is its perimeter?', options:['24 cm','36 cm','18 cm','12 cm'], correct:0, explain:'Perimeter = 4 × 6 = 24 cm.', diff:'Quick'},
      {case:'Which is closer to 1: 0.8 or 0.6?', options:['0.8','0.6','Both same','Need more data'], correct:0, explain:'0.8 is closer to 1.', diff:'Quick'},
      {case:'Solve: x + 9 = 16.', options:['7','6','8','5'], correct:0, explain:'x = 7.', diff:'Quick'},
      {case:'A train travels 60 km in 2 hours. Speed?', options:['30 km/h','20 km/h','40 km/h','50 km/h'], correct:0, explain:'60 ÷ 2 = 30 km/h.', diff:'Quick'},
      {case:'What is the next term: 5, 10, 20, 40, ... ?', options:['80','60','100','90'], correct:0, explain:'It doubles.', diff:'Quick'},
      {case:'If 40% of a number is 20, the number is?', options:['50','40','45','60'], correct:0, explain:'20 ÷ 0.4 = 50.', diff:'Quick'},
      {case:'What is the median of 2, 4, 9, 11, 15?', options:['9','11','4','15'], correct:0, explain:'Middle value is 9.', diff:'Quick'},
      {case:'A bag has 3 red and 1 blue marble. Probability of red?', options:['3/4','1/4','1/2','2/3'], correct:0, explain:'3 out of 4 are red.', diff:'Quick'}
    ];

    const practiceReasoningLab = [
      {case:'A shop has two offers: buy 2 notebooks for ₹45 or buy 3 for ₹60. Which is cheaper per notebook?', options:['3 for ₹60','2 for ₹45','Same price','Can’t tell'], correct:0, explain:'₹60/3 = ₹20 each; ₹45/2 = ₹22.50 each.', diff:'Reasoning'},
      {case:'A bus starts with 36 passengers. At the first stop 8 get off and 12 get on. At the next stop 5 get off. How many passengers now?', options:['35','33','37','31'], correct:0, explain:'36 - 8 + 12 - 5 = 35.', diff:'Reasoning'},
      {case:'A student scored 12/15, 14/20 and 8/10 on three quizzes. Which score shows the highest percentage?', options:['8/10','12/15','14/20','All equal'], correct:0, explain:'8/10 = 80%, 12/15 = 80%, 14/20 = 70%.', diff:'Reasoning'},
      {case:'A rectangle is twice as long as it is wide. Perimeter is 36 cm. Width?', options:['6 cm','8 cm','9 cm','12 cm'], correct:0, explain:'Let width = w, length = 2w. 2(3w)=36 => w=6.', diff:'Reasoning'},
      {case:'A school chart shows 40 students like cricket, 25 like football, and 15 like badminton. If the club wants equal groups of 5, how many groups of cricket can be formed?', options:['8','5','6','7'], correct:0, explain:'40 ÷ 5 = 8.', diff:'Reasoning'},
      {case:'A number is between 20 and 40. It is divisible by 3 and 4. Which could it be?', options:['24','28','30','34'], correct:0, explain:'24 is divisible by both 3 and 4.', diff:'Reasoning'}
    ];

    const practiceDataDetective = [
      {case:'A mini chart shows books read: Mon 2, Tue 5, Wed 3, Thu 6, Fri 4. What is the total?', options:['20','18','19','21'], correct:0, explain:'2+5+3+6+4 = 20.', diff:'Data'},
      {case:'Survey: 24 students choose tea, 18 choose juice, 8 choose water. What fraction choose water?', options:['1/5','1/4','2/5','1/3'], correct:0, explain:'8 out of 50 = 1/5.', diff:'Data'},
      {case:'Sales increased from 80 to 100. What is the percent increase?', options:['25%','20%','30%','15%'], correct:0, explain:'Increase is 20 on base 80 => 25%.', diff:'Data'},
      {case:'A line graph goes from 12 to 18 to 27 over three days. Which day had the biggest jump from the previous day?', options:['Day 3','Day 2','Same both days','Cannot tell'], correct:0, explain:'From 18 to 27 is +9, the biggest jump.', diff:'Data'},
      {case:'A pie chart shows 60% of time on study and 40% on games. If total time is 5 hours, how long was spent on games?', options:['2 hours','3 hours','1 hour','2.5 hours'], correct:0, explain:'40% of 5 = 2 hours.', diff:'Data'},
      {case:'A table lists temperatures 21, 24, 22, 25, 23. What is the range?', options:['4','3','5','2'], correct:0, explain:'25 - 21 = 4.', diff:'Data'}
    ];

    const pandaVault = [
      {case:'A school survey shows 120 students prefer music, sports, or art. 45 like music, 30 like sports, and the rest like art. What fraction prefer art?', options:['3/8','1/2','1/4','1/3'], correct:0, explain:'45 + 30 = 75, so 45 like art. 45/120 = 3/8.', diff:'Vault'},
      {case:'A farmer packs apples in boxes of 12. He has 95 apples. How many full boxes and apples left?', options:['7 full boxes, 11 left','8 full boxes, 3 left','7 full boxes, 7 left','6 full boxes, 23 left'], correct:0, explain:'95 ÷ 12 = 7 remainder 11.', diff:'Vault'},
      {case:'A graph rises from 10 to 22 over 4 hours. What is the average rate of change?', options:['3 per hour','4 per hour','2 per hour','5 per hour'], correct:0, explain:'(22 - 10) / 4 = 3.', diff:'Vault'},
      {case:'A discount of 20% is applied to a ₹500 item. Then 5% tax is added to the discounted price. Final price?', options:['₹420','₹400','₹420.00 with no tax','₹525'], correct:0, explain:'500 → 400 after discount; 5% tax makes 420.', diff:'Vault'},
      {case:'A sequence starts 3, 6, 12, 24. What is the 8th term?', options:['384','192','256','128'], correct:0, explain:'It doubles each time: 3×2^7 = 384.', diff:'Vault'}
    ];

    const weeklyChallenges = [
      {title:'Week 1: Budget Builder', set:[
        {case:'A stationery shop sells 3 pens for ₹24. What is the cost of 1 pen?', options:['₹8','₹7','₹6','₹9'], correct:0, explain:'24 ÷ 3 = 8.', diff:'Week'},
        {case:'A student has ₹100 and buys a notebook for ₹36 and a ruler for ₹14. Money left?', options:['₹50','₹40','₹60','₹30'], correct:0, explain:'100 - 36 - 14 = 50.', diff:'Week'},
        {case:'Which offers better value: 4 chocolates for ₹28 or 6 chocolates for ₹42?', options:['Same value','4 for ₹28','6 for ₹42','Not enough info'], correct:0, explain:'₹7 per chocolate in both offers.', diff:'Week'},
        {case:'A shop gives 10% discount on ₹250. Final price?', options:['₹225','₹230','₹240','₹215'], correct:0, explain:'10% of 250 = 25; 250 - 25 = 225.', diff:'Week'},
        {case:'A student saves ₹15 each week for 8 weeks. Total saved?', options:['₹120','₹105','₹100','₹130'], correct:0, explain:'15 × 8 = 120.', diff:'Week'}
      ]},
      {title:'Week 2: Travel Tracker', set:[
        {case:'A taxi covers 48 km in 3 hours. Average speed?', options:['16 km/h','18 km/h','12 km/h','14 km/h'], correct:0, explain:'48 ÷ 3 = 16.', diff:'Week'},
        {case:'A map scale says 1 cm = 5 km. If two towns are 7 cm apart, distance?', options:['35 km','30 km','40 km','25 km'], correct:0, explain:'7 × 5 = 35 km.', diff:'Week'},
        {case:'A train leaves at 9:20 and reaches at 11:05. Travel time?', options:['1 h 45 m','1 h 55 m','2 h 15 m','1 h 35 m'], correct:0, explain:'From 9:20 to 11:05 is 1 hour 45 minutes.', diff:'Week'},
        {case:'A bus uses 18 liters of fuel for 180 km. How many km per liter?', options:['10 km/l','9 km/l','12 km/l','8 km/l'], correct:0, explain:'180 ÷ 18 = 10 km/l.', diff:'Week'},
        {case:'A round trip is 24 km each way. Total distance?', options:['48 km','24 km','36 km','30 km'], correct:0, explain:'24 × 2 = 48 km.', diff:'Week'}
      ]},
      {title:'Week 3: Market Analytics', set:[
        {case:'A class survey has 20 students liking apples, 15 bananas, 10 mangoes, and 5 grapes. What percent like bananas?', options:['30%','25%','20%','15%'], correct:0, explain:'15 out of 50 = 30%.', diff:'Week'},
        {case:'A shop sells 120 items on Monday and 150 on Tuesday. Increase?', options:['25%','20%','30%','15%'], correct:0, explain:'Increase is 30 on base 120 => 25%.', diff:'Week'},
        {case:'A chart shows sales 8, 12, 16, 20 over 4 days. What is the pattern?', options:['Add 4 each day','Multiply by 2','Subtract 4 each day','Add 2 each day'], correct:0, explain:'Each day increases by 4.', diff:'Week'},
        {case:'A shop sold 40 items. 1/4 were notebooks. How many notebooks?', options:['10','12','8','14'], correct:0, explain:'40 × 1/4 = 10.', diff:'Week'},
        {case:'If revenue is ₹500 and costs are ₹320, profit?', options:['₹180','₹150','₹200','₹220'], correct:0, explain:'Profit = 500 - 320 = 180.', diff:'Week'}
      ]},
      {title:'Week 4: Shape Builder', set:[
        {case:'How many sides does a pentagon have?', options:['5','4','6','7'], correct:0, explain:'A pentagon has 5 sides.', diff:'Week'},
        {case:'A rectangle has length 8 cm and width 3 cm. Area?', options:['24 cm²','22 cm²','18 cm²','28 cm²'], correct:0, explain:'8 × 3 = 24.', diff:'Week'},
        {case:'How many degrees are in a right angle?', options:['90°','45°','180°','60°'], correct:0, explain:'A right angle is 90°.', diff:'Week'},
        {case:'A square’s perimeter is 20 cm. Side length?', options:['5 cm','4 cm','6 cm','10 cm'], correct:0, explain:'20 ÷ 4 = 5 cm.', diff:'Week'},
        {case:'How many vertices does a triangle have?', options:['3','4','5','6'], correct:0, explain:'A triangle has 3 vertices.', diff:'Week'}
      ]},
      {title:'Week 5: Fraction Quest', set:[
        {case:'What is 1/2 of 18?', options:['9','8','10','7'], correct:0, explain:'18 ÷ 2 = 9.', diff:'Week'},
        {case:'Which is larger: 2/3 or 3/5?', options:['2/3','3/5','Both equal','Need a calculator'], correct:0, explain:'2/3 is larger.', diff:'Week'},
        {case:'Add 1/4 + 2/4.', options:['3/4','1/2','2/4','4/4'], correct:0, explain:'Same denominators add directly.', diff:'Week'},
        {case:'What fraction of 12 is 3?', options:['1/4','1/3','1/2','3/4'], correct:0, explain:'3 out of 12 = 1/4.', diff:'Week'},
        {case:'If 3/8 of a pizza is eaten, what fraction remains?', options:['5/8','3/8','1/2','1/4'], correct:0, explain:'8/8 - 3/8 = 5/8.', diff:'Week'}
      ]},
      {title:'Week 6: Data Drills', set:[
        {case:'A bar chart shows 6, 9, 12, 15. What is the change each step?', options:['3','2','4','5'], correct:0, explain:'Each step adds 3.', diff:'Week'},
        {case:'Survey totals: 18 red, 12 blue, 10 green. How many in total?', options:['40','38','42','36'], correct:0, explain:'18 + 12 + 10 = 40.', diff:'Week'},
        {case:'If 10 out of 40 students prefer chess, what percent is that?', options:['25%','20%','30%','15%'], correct:0, explain:'10/40 = 25%.', diff:'Week'},
        {case:'A graph rises from 14 to 20. Increase?', options:['6','5','4','7'], correct:0, explain:'20 - 14 = 6.', diff:'Week'},
        {case:'A table lists 4, 7, 5, 9, 6. What is the median?', options:['6','5','7','4'], correct:0, explain:'Sorted: 4,5,6,7,9. Median is 6.', diff:'Week'}
      ]}
    ];

    const state = {
      selected: null,
      list: [],
      index: 0,
      score: 0,
      streak: 0,
      stars: 0,
      badges: 0,
      best: 0,
      timer: 20,
      timerId: null,
      transitionTimeout: null,
      locked: false,
      message: '',
      mode: 'grade',
      currentSetName: '',
      history: JSON.parse(localStorage.getItem('ams_history') || '[]'),
      earnedBadges: JSON.parse(localStorage.getItem('ams_badges') || '[]'),
      userName: JSON.parse(localStorage.getItem('ams_user') || '{}').name || '',
      userLevel: JSON.parse(localStorage.getItem('ams_user') || '{}').level || ''
    };

    function saveHistory() {
      localStorage.setItem('ams_history', JSON.stringify(state.history.slice(-6)));
      document.getElementById('statStars').textContent = state.stars;
      const badgesEl = document.getElementById('statBadges');
      if (badgesEl) badgesEl.textContent = state.earnedBadges.length;
      state.badges = state.earnedBadges.length;
    }

    function syncCounters() {
      const starsEl = document.getElementById('statStars');
      const badgesEl = document.getElementById('statBadges');
      const gradesEl = document.getElementById('statGrades');
      if (starsEl) starsEl.textContent = state.stars;
      if (badgesEl) badgesEl.textContent = state.earnedBadges.length;
      if (gradesEl) gradesEl.textContent = '12';
      state.badges = state.earnedBadges.length;
    }

    function unlockBadge(id) {
      const badge = badgeCatalog.find(b => b.id === id);
      if (!badge) return;
      if (!state.earnedBadges.some(b => b.id === id)) {
        state.earnedBadges.push(badge);
        localStorage.setItem('ams_badges', JSON.stringify(state.earnedBadges));
      }
      state.badges = state.earnedBadges.length;
      syncCounters();
    }

    function shuffle(arr) {
      const a = [...arr];
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }

    function withOptions(q) {
      const labels = ['A','B','C','D'];
      const items = q.options.map((opt, idx) => ({text: opt, correct: idx === q.correct}));
      const shuffled = shuffle(items);
      return {...q, options: shuffled.map((x, i)=>({...x, label: labels[i]})), correctIndex: shuffled.findIndex(x=>x.correct)};
    }

    function prepareSet(set, name) {
      state.selected = name;
      const questions = set.questions || set;
      state.list = shuffle(questions).map(withOptions);
      state.index = 0;
      state.score = 0;
      state.streak = 0;
      state.message = '';
      state.mode = set.mode || (set === bossChallenge ? 'boss' : 'grade');
      state.currentSetName = name;
      state.timerBase = set.timer || (state.mode === 'boss' ? 25 : 20);
      state.timer = state.timerBase;
      clearTimeout(state.transitionTimeout);
      renderQuiz();
      startTimer();
      const assignmentPage = document.getElementById('assignmentPage');
      if (assignmentPage) assignmentPage.scrollIntoView({behavior:'smooth'});
    }

    function startTimer() {
      clearInterval(state.timerId);
      const base = state.timerBase || (state.mode === 'boss' ? 25 : 20);
      state.timer = base;
      updateClock();
      state.timerId = setInterval(() => {
        if (state.locked) return;
        state.timer--;
        updateClock();
        if (state.timer <= 0) answer(null);
      }, 1000);
    }

    function updateClock() {
      const base = state.timerBase || (state.mode === 'boss' ? 25 : 20);
      const deg = Math.max(0, Math.min(360, (state.timer / base) * 360));
      const clock = document.getElementById('clock');
      if (clock) clock.style.setProperty('--pct', `${deg}deg`);
      const timeTxt = document.getElementById('timeTxt');
      if (timeTxt) timeTxt.textContent = state.timer > 0 ? state.timer : '0';
      const bar = document.getElementById('progressBar');
      const total = Math.max(1, state.list.length || 1);
      if (bar) bar.style.width = `${(state.index / total) * 100}%`;
    }

    function award(isCorrect) {
      if (isCorrect) {
        state.score += 1;
        state.stars += 1;
        state.streak += 1;
        if (state.streak % 3 === 0) state.badges += 1;
        state.best = Math.max(state.best, state.streak);
        fireConfetti();
      } else {
        state.streak = 0;
      }
      document.getElementById('statStars').textContent = state.stars;
      const badgesEl = document.getElementById('statBadges');
      if (badgesEl) badgesEl.textContent = state.earnedBadges.length;
      state.badges = state.earnedBadges.length;
      document.getElementById('statGrades').textContent = 12;
    }

    function fireConfetti() {
      const layer = document.getElementById('confetti');
      layer.classList.remove('hidden');
      layer.innerHTML = '';
      const colors = ['#7c3aed','#2e72d2','#f59e0b','#16a34a','#ef4444'];
      for (let i = 0; i < 36; i++) {
        const s = document.createElement('span');
        s.className = 'piece';
        s.style.left = Math.random()*100 + 'vw';
        s.style.top = '12px';
        s.style.background = colors[i % colors.length];
        s.style.animationDelay = (Math.random()*0.2)+'s';
        s.style.width = (8 + Math.random()*10) + 'px';
        s.style.height = (12 + Math.random()*16) + 'px';
        layer.appendChild(s);
      }
      setTimeout(()=>{layer.classList.add('hidden'); layer.innerHTML='';}, 1400);
    }

    function renderGradeGrid() {
      const el = document.getElementById('gradeGrid');
      if (!el) return;
      const icons = ['🔢','📚','🧠','📏','🧮','🎯','📐','📈','🧩','⚙️','📊','🚀'];
      const accents = ['#7c3aed','#2e72d2','#f59e0b','#06b6d4','#ec4899','#10b981','#8b5cf6','#ef4444','#0ea5e9','#f97316','#6366f1','#14b8a6'];
      const tags = ['Numbers & patterns','Place value','Multiplication','Fractions & units','Decimals & factors','Ratios & equations','Expressions','Linear ideas','Algebra','Quadratics','Sequences','Calculus prep'];
      el.innerHTML = grades.map((g, idx) => `
        <button class="grade-card" data-grade="${g.id}" style="background:linear-gradient(180deg, #fff, ${idx % 2 ? '#fbfdff' : '#f8fbff'}); border-top:6px solid ${accents[idx]};">
          <div style="display:flex;justify-content:space-between;align-items:start;gap:10px">
            <div>
              <div class="pill ${g.id < 4 ? 'p1' : g.id < 7 ? 'p2' : 'p3'}" style="width:max-content">${g.group}</div>
              <strong>Grade ${g.id}</strong>
            </div>
            <div style="font-size:1.8rem;line-height:1">${icons[idx]}</div>
          </div>
          <span>${g.summary}</span>
          <div class="meta-row" style="margin-top:10px">
            <span class="meta">15 questions</span>
            <span class="meta">${tags[idx]}</span>
          </div>
        </button>
      `).join('');
      el.querySelectorAll('[data-grade]').forEach(btn => btn.addEventListener('click', () => {
        const g = grades.find(x => x.id === Number(btn.dataset.grade));
        prepareSet({questions:g.questions, mode:'grade', timer:20}, `Grade ${g.id}`);
      }));
    }

    function renderPracticeMenu() {
      const el = document.getElementById('practiceMenu');
      if (!el) return;
      const cards = [
        {title:'Quiz Sprint', desc:'Fast mixed problems with randomized answers.', icon:'⚡', set:practiceQuickQuiz, mode:'practice', timer:18, btn:'Start Sprint', chips:['Speed','Shuffle','Warm-up'], accent:'#4f6ef7', ribbon:'Quick fire'},
        {title:'Reasoning Lab', desc:'Case-based thinking and multi-step logic.', icon:'🧠', set:practiceReasoningLab, mode:'practice', timer:22, btn:'Open Lab', chips:['Logic','Strategy','Explain'], accent:'#8b5cf6', ribbon:'Think deeper'},
        {title:'Data Detective', desc:'Charts, tables, percentages, and interpretation.', icon:'📊', set:practiceDataDetective, mode:'data', timer:24, btn:'Detect Data', chips:['Graphs','Tables','Percent'], accent:'#f59e0b', ribbon:'Data story'},
        {title:'Panda Apex Vault', desc:'Five ultra-tough, thought-provoking questions.', icon:'🔐', set:pandaVault, mode:'vault', timer:30, btn:'Enter Vault', chips:['Boss','Deep think','Advanced'], accent:'#7c3aed', ribbon:'Ultra challenge'}
      ];
      el.innerHTML = cards.map(c => `
        <div class="card feature ${c.mode === 'vault' ? 'purple' : c.mode === 'data' ? 'orange' : ''}" style="min-height:270px;border-top:6px solid ${c.accent};background:linear-gradient(180deg,#fff,${c.mode==='vault' ? '#fbf6ff' : c.mode==='data' ? '#fff8ef' : '#f8fbff'})">
          <div class="icon" style="background:linear-gradient(180deg,#fff,rgba(255,255,255,.7));color:${c.accent}">${c.icon}</div>
          <div class="pill ${c.mode === 'data' ? 'p2' : c.mode === 'vault' ? 'p3' : 'p1'}" style="width:max-content">${c.ribbon}</div>
          <h3>${c.title}</h3>
          <p>${c.desc}</p>
          <div class="badges" style="margin-top:2px">${c.chips.map(b => `<span class="chip">${b}</span>`).join('')}</div>
          <a class="action" href="javascript:void(0)" style="background:${c.accent}">${c.btn}</a>
        </div>
      `).join('');
      el.querySelectorAll('.action').forEach((btn, i) => btn.addEventListener('click', () => {
        const c = cards[i];
        prepareSet({questions:c.set, mode:c.mode, timer:c.timer}, c.title);
      }));
    }

    function renderWeeklyGrid() {
      const el = document.getElementById('weeklyGrid');
      if (!el) return;
      const currentWeek = getWeekNumber();
      const items = getRollingWeeklyChallenges();
      el.innerHTML = items.map((w, i) => {
        const title = w.title.replace(/^Week\s+\d+:\s*/, '');
        return `<span class="chip" data-week="${i}" style="cursor:pointer">Week ${currentWeek + i}: ${title}</span>`;
      }).join('');
      el.querySelectorAll('[data-week]').forEach(btn => btn.addEventListener('click', () => {
        const w = items[Number(btn.dataset.week)];
        const title = `Week ${currentWeek + Number(btn.dataset.week)}: ${w.title.replace(/^Week\s+\d+:\s*/, '')}`;
        prepareSet({questions:w.set, mode:'week', timer:22}, title);
      }));
    }

    function renderBadges() {
      const wall = document.getElementById('badgeWall');
      if (!wall) return;
      wall.innerHTML = badgeCatalog.map(b => {
        const unlocked = state.earnedBadges.some(x => x.id === b.id);
        return `<div class="chip" style="justify-content:space-between;min-width:100%;background:${unlocked ? '#eefdf4' : '#f5f8ff'};border-color:${unlocked ? '#86efac' : '#e4edff'}"><span>${b.icon} ${b.name}</span><span class="small">${unlocked ? 'Unlocked' : 'Locked'}</span></div>`;
      }).join('');
      syncCounters();
    }

    function renderQOTD() {
      const today = getDailyQuestion();
      const textEl = document.getElementById('qotdText');
      if (textEl) textEl.textContent = today.text;
      const titleEl = document.getElementById('qotdTitle');
      if (titleEl) titleEl.textContent = `Question of the Day — ${new Date().toLocaleDateString(undefined, {weekday:'long'})}`;
      const btn = document.getElementById('qotdBtn');
      const hintBtn = document.getElementById('brainBoostBtn');
      const ans = document.getElementById('qotdAnswer');
      const hintBox = document.getElementById('qotdHint');
      const hintText = getQuestionHint(today.text);
      const answerText = `Answer: ${today.answer}`;
      const toggleAnswer = () => {
        if (!ans) return;
        const isHidden = ans.classList.toggle('hidden');
        if (btn) btn.textContent = isHidden ? 'Show Answer' : 'Hide Answer';
        if (btn) btn.setAttribute('aria-expanded', String(!isHidden));
      };
      const toggleHint = () => {
        if (!hintBox) return;
        const isHidden = hintBox.classList.toggle('hidden');
        if (hintBtn) hintBtn.textContent = isHidden ? 'Get Hint' : 'Hide Hint';
        if (hintBtn) hintBtn.setAttribute('aria-expanded', String(!isHidden));
      };
      if (ans) {
        ans.textContent = answerText;
        ans.classList.add('hidden');
      }
      if (hintBox) {
        hintBox.textContent = `Hint: ${hintText}`;
        hintBox.classList.add('hidden');
      }
      if (btn) {
        btn.textContent = 'Show Answer';
        btn.setAttribute('aria-expanded', 'false');
        btn.onclick = toggleAnswer;
      }
      if (hintBtn) {
        hintBtn.textContent = 'Get Hint';
        hintBtn.setAttribute('aria-expanded', 'false');
        hintBtn.onclick = toggleHint;
      }
    }

    function renderQuiz() {
      const stage = document.getElementById('quizStage');
      const q = state.list[state.index];
      if (!q) return renderResults();
      document.getElementById('quizModePill').textContent = state.currentSetName || 'Quiz';
      document.getElementById('quizTitle').textContent = `${state.currentSetName} — Question ${state.index + 1}/${state.list.length}`;
      document.getElementById('quizSubtitle').textContent = q.diff === 'Vault' ? 'Ultra tough: interpret, calculate, and connect clues.' : (q.diff === 'Data' || q.diff === 'Week' || q.case.includes('survey') || q.case.includes('graph') ? 'Reasoning and data interpretation question.' : 'Read carefully, think, and pick the best answer.');
      updateClock();
      const hint = getQuestionHint(q.case);
      stage.innerHTML = `
        <div class="quiz-tools" style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin:0 0 12px">
          <button class="brain-boost-btn" id="quizHintBtn" type="button">Get Hint</button>
          <div id="quizHintBox" class="small hidden" style="margin:0;padding:11px 13px;border-radius:16px;background:#fff7e6;border:1px solid #f2d59a;color:#8a5a00;line-height:1.45">Hint: ${hint}</div>
        </div>
        <div class="qtext">${q.case}</div>
        <div class="answers">${q.options.map((o, i) => `
          <button class="ans" data-i="${i}">
            <div class="label">${o.label}</div><div class="txt">${o.text}</div>
          </button>`).join('')}</div>
        <div id="feedback" class="feedback"></div>
      `;
      const hintBtn = document.getElementById('quizHintBtn');
      const hintBox = document.getElementById('quizHintBox');
      if (hintBtn && hintBox) {
        hintBtn.addEventListener('click', () => {
          const isHidden = hintBox.classList.toggle('hidden');
          hintBtn.textContent = isHidden ? 'Get Hint' : 'Hide Hint';
          hintBtn.setAttribute('aria-expanded', String(!isHidden));
        });
      }
      stage.querySelectorAll('.ans').forEach(b => b.addEventListener('click', () => answer(Number(b.dataset.i))));
    }

    function answer(choice) {
      if (state.locked) return;
      state.locked = true;
      clearInterval(state.timerId);
      clearTimeout(state.transitionTimeout);
      const q = state.list[state.index];
      if (!q) return;
      const buttons = [...document.querySelectorAll('.ans')];
      buttons.forEach((b, i) => {
        if (i === q.correctIndex) b.classList.add('correct');
        if (choice !== null && i === choice && i !== q.correctIndex) b.classList.add('wrong');
        b.disabled = true;
      });
      const ok = choice === q.correctIndex;
      award(ok);
      const fb = document.getElementById('feedback');
      fb.className = 'feedback show ' + (ok ? 'good' : 'bad');
      const label = ['A', 'B', 'C', 'D'][q.correctIndex];
      const steps = getStepByStep(q.case, q.explain);
      const nextLabel = state.index >= state.list.length - 1 ? 'See Results' : 'Next Question';
      fb.innerHTML = `
        ${ok ? 'Correct! 🎉' : `Almost there. Correct answer: <b>${label}</b>.`}
        <div style="margin-top:10px" class="small"><b>Step-by-step:</b></div>
        <ol style="margin:8px 0 0 18px;padding:0;line-height:1.55" class="small">
          ${steps.map(s => `<li>${s}</li>`).join('')}
        </ol>
        <button class="primary" style="margin-top:14px" type="button" onclick="advanceQuestion()">${nextLabel}</button>
      `;
      if (!ok) document.querySelector('.quiz-card').classList.add('shake');
      setTimeout(() => document.querySelector('.quiz-card').classList.remove('shake'), 500);
      state.history.push({set: state.currentSetName, score: ok ? 1 : 0, time: new Date().toISOString()});
      localStorage.setItem('ams_history', JSON.stringify(state.history.slice(-12)));
      state.transitionTimeout = setTimeout(() => {
        if (state.locked) advanceQuestion();
      }, 2500);
    }

    function advanceQuestion() {
      clearTimeout(state.transitionTimeout);
      if (state.index >= state.list.length - 1) {
        finishQuiz();
        return;
      }
      state.index += 1;
      state.locked = false;
      state.timer = state.timerBase;
      renderQuiz();
      startTimer();
    }

    function finishQuiz() {
      clearInterval(state.timerId);
      clearTimeout(state.transitionTimeout);
      state.locked = false;
      renderResults();
    }

    function renderResults() {
      clearInterval(state.timerId);
      clearTimeout(state.transitionTimeout);
      const stage = document.getElementById('quizStage');
      const total = state.list.length || 1;
      const pct = Math.round((state.score / total) * 100);
      const earned = [];
      if (state.currentSetName.includes('Grade')) { earned.push({id:'explorer', icon:'📘', title:'Grade Explorer', text:'Completed a grade assignment.'}); unlockBadge('explorer'); }
      if (state.best >= 3) { earned.push({id:'streak', icon:'🔥', title:'Streak Builder', text:'Hit a 3-answer streak.'}); unlockBadge('streak'); }
      if (pct >= 80) { earned.push({id:'accuracy', icon:'🌟', title:'Accuracy Boost', text:'Scored 80% or above.'}); unlockBadge('accuracy'); }
      if (state.currentSetName.includes('Vault')) { earned.push({id:'vault', icon:'🔐', title:'Panda Vault Solver', text:'Completed the ultra-challenge.'}); unlockBadge('vault'); }
      if (state.currentSetName.includes('Data') || state.currentSetName.includes('Week')) { earned.push({id:'data', icon:'📊', title:'Data Detective', text:'Solved a data or weekly challenge.'}); unlockBadge('data'); }
      const sessionBadgeHtml = earned.map(b => `<div class="card" style="padding:12px;border-radius:18px;text-align:left;background:#fbfcff"><div class="pill p1" style="display:inline-flex;margin-bottom:8px">${b.icon} ${b.title}</div><div class="small">${b.text}</div></div>`).join('');
      stage.innerHTML = `
        <div class="card" style="text-align:center;background:linear-gradient(180deg,#fff,#f8fbff)">
          <h3 style="margin-top:0">${state.currentSetName} Completed</h3>
          <p class="muted">You answered <b>${state.score}</b> out of <b>${total}</b> correctly.</p>
          <p class="muted">Earned <b>${state.stars}</b> stars and <b>${state.earnedBadges.length}</b> badges total.</p>
          <div class="grid3" style="margin:16px 0">${sessionBadgeHtml || '<div class="card">⭐ Great work!</div>'}</div>
          <button class="primary" onclick="goTo('gradeList')">Choose Another Grade</button>
          <button class="secondary" style="border-color:#dbe7f7;color:#23446b;background:#fff;margin-left:8px" onclick="prepareSet({questions:pandaVault, mode:'vault', timer:30}, 'The Panda Vault')">Panda Vault</button>
        </div>`;
      document.getElementById('quizTitle').textContent = 'Results';
      document.getElementById('quizSubtitle').textContent = `Accuracy ${pct}% • Keep going for bigger badges!`;
      document.getElementById('progressBar').style.width = '100%';
      document.getElementById('timeTxt').textContent = '✓';
      updateMasteryMap();
      renderBadges();
      syncCounters();
    }

    function updateMasteryMap() {
      const history = state.history.slice(-6);
      const correct = history.filter(h => h.score === 1).length;
      const accuracy = history.length ? Math.round((correct / history.length) * 100) : 0;
      const values = [
        {name:'Confidence', val: Math.min(100, 45 + state.streak * 12)},
        {name:'Accuracy', val: Math.max(20, accuracy)},
        {name:'Reasoning', val: Math.min(100, 40 + (state.currentSetName.includes('Reason') ? 35 : 15))},
        {name:'Data', val: Math.min(100, 35 + (state.currentSetName.includes('Data') ? 40 : 18))},
        {name:'Challenge', val: Math.min(100, 45 + (state.currentSetName.includes('Vault') ? 45 : 20))}
      ];
      const wrap = document.getElementById('chartWrap');
      if (!wrap) return;
      wrap.innerHTML = `<div class="dashboard-labels" style="padding:12px 10px 4px">${values.map((v,i)=>`<div style="display:grid;grid-template-columns:minmax(180px,220px) 1fr;gap:22px;align-items:center;margin:0 0 22px"><div style="white-space:nowrap;overflow:visible;font-size:1.03rem;font-weight:900;color:#24324a;letter-spacing:.06px;line-height:2.1">${v.name}</div><div style="height:12px;border-radius:999px;background:#edf3fb;border:1px solid #e6eef8;overflow:hidden"><div style="width:${Math.max(12, v.val)}%;height:100%;border-radius:inherit;background:${i % 3 === 0 ? '#7c3aed' : i % 3 === 1 ? '#2e72d2' : '#f59e0b'}"></div></div></div>`).join('')}</div>`;
      const note = document.getElementById('masteryNote');
      if (note) note.textContent = `Focus areas update after every run. Current streak: ${state.streak}. Best streak: ${state.best}.`;
    }

    function resetQuizBoard() {
      clearInterval(state.timerId);
      clearTimeout(state.transitionTimeout);
      state.selected = null;
      state.list = [];
      state.index = 0;
      state.score = 0;
      state.streak = 0;
      state.timerBase = 20;
      state.timer = 20;
      state.locked = false;
      state.message = '';
      state.currentSetName = '';
      const stage = document.getElementById('quizStage');
      if (stage) stage.innerHTML = '<p class="small">Tip: grade quizzes, challenge problems, and boss rounds all use the same beautiful quiz engine.</p>';
      const pill = document.getElementById('quizModePill'); if (pill) pill.textContent = 'Choose a grade';
      const title = document.getElementById('quizTitle'); if (title) title.textContent = 'Interactive Quiz Board';
      const subtitle = document.getElementById('quizSubtitle'); if (subtitle) subtitle.textContent = 'Select a grade card to begin. Answers stay on screen until you continue, and challenge questions get tougher as you progress.';
      const bar = document.getElementById('progressBar'); if (bar) bar.style.width = '0%';
      const timeTxt = document.getElementById('timeTxt'); if (timeTxt) timeTxt.textContent = '--';
      const clock = document.getElementById('clock'); if (clock) clock.style.setProperty('--pct','0deg');
    }

    function goTo(target) {
      if (target === 'gradeList') resetQuizBoard();
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({behavior:'smooth', block:'start'});
    }

    function openLogin() {
      const modal = document.getElementById('loginModal');
      if (modal) modal.classList.remove('hidden');
      const name = document.getElementById('loginName');
      const level = document.getElementById('loginLevel');
      if (name) name.value = state.userName || '';
      if (level) level.value = state.userLevel || '';
    }

    function closeLogin() {
      const modal = document.getElementById('loginModal');
      if (modal) modal.classList.add('hidden');
    }

    function saveLogin() {
      const name = (document.getElementById('loginName')?.value || '').trim();
      const level = (document.getElementById('loginLevel')?.value || '').trim();
      state.userName = name;
      state.userLevel = level;
      localStorage.setItem('ams_user', JSON.stringify({name, level}));
      localStorage.setItem('ams_userName', name);
      localStorage.setItem('ams_userLevel', level);
      updateProfileStatus();
      closeLogin();
    }

    function bindNav() {
      const links = [...document.querySelectorAll('.nav-links a')];
      const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const id = '#' + e.target.id;
            links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === id));
          }
        });
      }, {rootMargin:'-30% 0px -55% 0px'});
      sections.forEach(s => obs.observe(s));
    }

    function init() {
      renderGradeGrid();
      renderPracticeMenu();
      renderWeeklyGrid();
      renderBadges();
      renderQOTD();
      updateMasteryMap();
      bindNav();
      syncCounters();
      updateProfileStatus();
      document.getElementById('quizModePill').textContent = 'Choose a grade';
      document.getElementById('quizTitle').textContent = 'Interactive Quiz Board';
      document.getElementById('quizSubtitle').textContent = 'Select a grade card to begin. Answers stay on screen until you continue, and challenge questions get tougher as you progress.';
      document.getElementById('timeTxt').textContent = '--';
      document.getElementById('clock').style.setProperty('--pct', '0deg');
      window.prepareSet = prepareSet;
      window.pandaVault = pandaVault;
      window.openLogin = openLogin;
      window.closeLogin = closeLogin;
      window.saveLogin = saveLogin;
      window.goTo = goTo;
    }

    init();
