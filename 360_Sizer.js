const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math'); //to map values
const Tweakpane = require('tweakpane');

const settings = {
  dimensions: [ 1080, 1080 ],
  animate: true,
  playbackRate: 'throttle',
  loop : true,
  duration: 3,
  fps: 1,
};

const params= {
  Indicator: "Average",
  CO2: 5,
  Happy: 5,
  Land: 5,
  Age: 5,
  Population: 5,
}

const sketch = () => {
  return ({ context, width, height }) => {

    //set background
    context.fillStyle = '#F6F3E1';
    context.fillRect(0, 0, width, height);
    context.fillStyle = 'black';

    //convert units : degrees to radiant
    const degToRad = (degrees) => {
      return degrees / 180 * Math.PI;
    };

    //create positions
    const cx = width * 0.5;
    const cy = height * 0.45;
    let x,y;

    const radius = width * 0.1;

    // list of data variables;
    const Select=  {'AUT'  :  5,'BEL'  :  5,'BUL'  :  5,'CYP'  :  5,'CZE'  :  5,'GER'  :  5,'DAN'  :  5,'ESP'  : 5,'EST'  :  5,'FIN'  :  5,'FRA'  :  5,'GRE'  :  5,'CRO'  :  5,'HUN'  :  5,'IRL'  :  5,'ITA'  :  5,'LIT'  :  5,'LUX'  :  5,'LAT'  :  5,'MAL'  :  5,'HOL'  :  5,'POL'  :  5,'POR'  :  5,'ROU'  :  5,'SVK'  :  5,'SVN'  :  5,'SWE'  :  5}
    const CO2 = {'AUT'  :  7,'HUN'  :  4,'SVK'  :  6,'CZE'  :  10,'POL'  :  7,'LIT'  :  2,'LAT'  :  2,'EST'  :  9,'FIN'  :  4,'SWE'  :  1,'DAN'  :  6,'GER'  :  9,'LUX'  :  10,'HOL'  :  10,'BEL'  :  9,'IRL'  :  8,'FRA'  :  3,'POR'  :  3,'ESP'  :  4,'ITA'  :  5,'MAL'  :  2,'GRE'  :  6,'CYP'  :  8,'BUL'  :  5,'ROU'  :  2,'CRO'  :  2,'SVN'  :  7, }
    const Happy = {'AUT'  :  9,'HUN'  :  2,'SVK'  :  5,'CZE'  :  7,'POL'  :  5,'LIT'  :  4,'LAT'  :  3,'EST'  :  2,'FIN'  :  10,'SWE'  :  9,'DAN'  :  10,'GER'  :  8,'LUX'  :  9,'HOL'  :  10,'BEL'  :  7,'IRL'  :  8,'FRA'  :  6,'POR'  :  2,'ESP'  :  6,'ITA'  :  6,'MAL'  :  7,'GRE'  :  2,'CYP'  :  3,'BUL'  :  1,'ROU'  :  4,'CRO'  :  2,'SVN'  :  4, }
    const Land = {'AUT'  :  6,'HUN'  :  7,'SVK'  :  4,'CZE'  :  5,'POL'  :  9,'LIT'  :  4,'LAT'  :  4,'EST'  :  3,'FIN'  :  9,'SWE'  :  10,'DAN'  :  3,'GER'  :  9,'LUX'  :  2,'HOL'  :  2,'BEL'  :  2,'IRL'  :  5,'FRA'  :  10,'POR'  :  6,'ESP'  :  10,'ITA'  :  8,'MAL'  :  1,'GRE'  :  7,'CYP'  :  2,'BUL'  :  7,'ROU'  :  8,'CRO'  :  6,'SVN'  :  2, }
    const Age = {'AUT'  :  9,'HUN'  :  4,'SVK'  :  2,'CZE'  :  3,'POL'  :  2,'LIT'  :  3,'LAT'  :  7,'EST'  :  5,'FIN'  :  8,'SWE'  :  5,'DAN'  :  6,'GER'  :  10,'LUX'  :  2,'HOL'  :  7,'BEL'  :  6,'IRL'  :  2,'FRA'  :  4,'POR'  :  7,'ESP'  :  6,'ITA'  :  10,'MAL'  :  4,'GRE'  :  9,'CYP'  :  1,'BUL'  :  10,'ROU'  :  3,'CRO'  :  9,'SVN'  :  8, }
    const Population = {'AUT'  :  6,'HUN'  :  6,'SVK'  :  4,'CZE'  :  7,'POL'  :  9,'LIT'  :  3,'LAT'  :  2,'EST'  :  2,'FIN'  :  4,'SWE'  :  7,'DAN'  :  5,'GER'  :  10,'LUX'  :  2,'HOL'  :  8,'BEL'  :  8,'IRL'  :  4,'FRA'  :  10,'POR'  :  6,'ESP'  :  9,'ITA'  :  10,'MAL'  :  1,'GRE'  :  7,'CYP'  :  2,'BUL'  :  5,'ROU'  :  9,'CRO'  :  3,'SVN'  :  2, }
    const averageSel1 = "Average";
    const averageSel2 = "Europe";
    const averageCO21 = "6 tons";
    const averageCO22 = "per person";
    const averageHappy1 = "6.4/10";
    const averageHappy2 = "per person";
    const averageLand1 = "150,000";
    const averageLand2 = "km2";
    const averageAge1 = "41";
    const averageAge2 = "years old";
    const averagePop1 = "16,5";
    const averagePop2 = "Millions People";

    //number of slices of viz. n# key-value per array of variable.
    const listLen =Object.keys(Select).length; //length of the variable array. then serves the number of slices

    //creation indicator list to be able to loop
    const indicator_list = ["Europe","CO2", "GDP", "Happy", "Land",'Alcohol', 'Artists', 'Babies', 'Cancer', 'Centenary',  'Crimes', 'Culture_budget', 'Death', 'Depression', 'Divorce', 'Doctor', 'Drug_use', 'Family_size', 'Female', 'Left_behind', 'Life_expectancy', 'Marriage', 'Obesity', 'Population', 'Prisoners', 'Retired', 'Smoker', 'Student', 'Suicide', 'University', 'Urban', 'Vegetables', ];
    const indicator = params.Indicator// indicator_list[Math.floor(Math.random()*indicator_list.length)];

    //Creating empty array for country_id
    const indic_len = Object.keys(indicator_list).length;
    // console.log("indic_len : ", indic_len)

    let country_ids = [];
    let new_id = 0
    // console.log("country_ids : ", country_ids)

    let newIndic;
    // console.log("params.indic::", params.Indicator)

    if (indicator== "Europe"){
      newIndic = Select ; average1 = averageSel1; average2 = averageSel2;
    }
    else if (indicator== 'CO2'){	newIndic =CO2; average1 = averageCO21	;average2 = averageCO22	}
    else if (indicator== 'Happy'){	newIndic =Happy;	average1 = averageHappy1	;average2 = averageHappy2	}
    else if (indicator== 'Land'){	newIndic =Land;average1 = averageLand1	;average2 = averageLand2		}
    else if (indicator== 'Age'){	newIndic =Age;	average1 = averageAge1	;average2 = averageAge2	}
    else if (indicator== 'Population'){	newIndic =Population;average1 = averagePop1	;average2 = averagePop2		}


    context.beginPath();
    context.strokeStyle = 'green';
    context.arc(540, 485, 335, 0, Math.PI * 2);
    context.lineWidth= 2.5
    context.stroke();
    context.restore();


    for (const [key, value] of Object.entries(newIndic)) {

    //incremental id
    new_id += 1;
    country_ids.push(new_id);
    const lastItem = country_ids[country_ids.length - 1];


    //creating variables
    const country_name = `${key}`;
    const score_str = `${value}`;
    const score = parseInt(score_str)
    // console.log("country name: ", country_name)
    // console.log("score : ", score)

    //mapping score and bar length
    const rangeScore = math.mapRange(score, 1, 10, -200, -400) // map range (const to map, origin base, origin top, new base, new top)
    // console.log("mapScore : ", rangeScore)
    const slice = degToRad(360/listLen);
    // console.log("slice : ", slice)
    const angle = slice * (lastItem);
    // console.log("angle : ", angle)



    //rotations and print
    x = cx + radius * Math.sin(angle);
    y = cy + radius * Math.cos(angle);

    const font_size = (params.score * 2.9) + "px"

    context.save();
    context.translate(x,y);
    context.rotate(-angle-2.8);
    context.fillStyle = "#E0C602" //"#E0C602"; //color of country name
    context.font = "30px Calibri";
    context.fillText( country_name , -161, 100)


    context.beginPath()
    context.moveTo( rangeScore, 100); //map 1 => -200 to 10 => -400
    context.lineTo(-192,99);
    context.lineCap ="round"; //[ 'round', 'square']
    context.strokeStyle = "#051B80";
    context.lineWidth = 20;
    context.stroke();
    context.restore()
      };




  //center the title
  const len_text = context.measureText(indicator).width;
  const x_center = width/2 - (len_text );
  context.fillStyle = "#2D3F3C";
  context.font = "60px futura";
  context.fillText(indicator, x_center, 1000);
  context.shadowBlur = 60;

  //center the title


  context.font = "40px futura";
  const len_avg2 = context.measureText(average1).width;
  const x_center_avg2 = width/2 - (len_avg2/2);
  context.fillStyle = 'green';
  context.fillText(average1, x_center_avg2, 475, );
  context.shadowBlur = 60;

  context.font = "30px futura";
  const len_avg = context.measureText(average2).width;
  const x_center_avg = width/2 - (len_avg/2);
  context.fillStyle = 'green';
  context.fillText(average2, x_center_avg,525, );
  context.shadowBlur = 60;




    };
  };

const createPane = () => {
  const pane = new Tweakpane.Pane(); //create a new slider pane
  let folder;

  folder = pane.addFolder({ title : "The_Helicopter view of Europe"});
  folder.addInput(params, "Indicator", { options : { Select : "Europe",

  CO2 : 'CO2' ,
  Happy : 'Happy' ,
  Land : "Land",
  Age : 'Age' ,
  Population : 'Population' ,
}});
};

createPane();

canvasSketch(sketch, settings);
