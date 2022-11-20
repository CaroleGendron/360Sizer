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
  Active: 5,
  Agri_job: 5,
  Air_passenger: 5,
  Alcohol_liter: 5,
  Alcohol_Price_Index: 5,
  All_Debts: 5,
  Artists: 5,
  Baby_Boomer: 5,
  Beach_house: 5,
  Biocapacity: 5,
  Birth: 5,
  Business_job: 5,
  Business_number: 5,
  Cancer: 5,
  Centenary: 5,
  Child: 5,
  Climate_change_death: 5,
  Cloth_Price_Index: 5,
  CO2: 5,
  CO2_agri: 5,
  CO2_electricity: 5,
  CO2_transport: 5,
  Coastal_line: 5,
  Consumption: 5,
  Crimes: 5,
  Debt_household: 5,
  Doctor: 5,
  Drug_use: 5,
  Education_Price_Index: 5,
  Electricity_renewable: 5,
  Electricity_use: 5,
  Energy_Price_Index: 5,
  Family_size: 5,
  Female: 5,
  Female_Retirement_age: 5,
  Footprint: 5,
  GDP: 5,
  Gini: 5,
  Happy: 5,
  Healthcare_expenditure: 5,
  Homicide: 5,
  Hospital_bed: 5,
  Hospital_patient: 5,
  House_room: 5,
  Inactive: 5,
  Job: 5,
  Job_travel: 5,
  Jobless: 5,
  Labor_cost_annual: 5,
  Land: 5,
  Land_polluted: 5,
  Land_protected: 5,
  LGBT_acceptance: 5,
  Life_expectancy: 5,
  Malboro_Price: 5,
  Male_Retirement_age: 5,
  Manufacturing_job: 5,
  Marriage: 5,
  Marriage: 5,
  Math_PISA: 5,
  Median_age: 5,
  Nurse: 5,
  Obesity: 5,
  Pisa: 5,
  Police_officers: 5,
  Population: 5,
  Poverty_risk: 5,
  Prisoners: 5,
  Railway_length: 5,
  Reading: 5,
  Reading_books: 5,
  Recycling: 5,
  Resting: 5,
  Retail_number: 5,
  Retired: 5,
  Road_lenght: 5,
  Road_passenger: 5,
  Salary: 5,
  Salary_gap_gender: 5,
  Salary_hour: 5,
  Savings: 5,
  Science_job: 5,
  Smoker: 5,
  Sports: 5,
  Student: 5,
  Student_high_school_cost: 5,
  Suicide: 5,
  Teacher_college: 5,
  Teacher_high_school: 5,
  Teacher_primary_school: 5,
  Teacher_university: 5,
  Tenant: 5,
  Tourist: 5,
  Urban_Rural: 5,
  Vegetables: 5,
  Waste_municipal: 5,
  Water: 5,
  Water_stress: 5,
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
    const Active = {'AUT'  :  9,'HUN'  :  8,'SVK'  :  9,'CZE'  :  4,'POL'  :  9,'LIT'  :  7,'LAT'  :  2,'EST'  :  2,'FIN'  :  2,'SWE'  :  2,'DAN'  :  3,'GER'  :  5,'LUX'  :  10,'HOL'  :  6,'BEL'  :  4,'IRL'  :  7,'FRA'  :  1,'POR'  :  5,'ESP'  :  8,'ITA'  :  2,'MAL'  :  10,'GRE'  :  3,'CYP'  :  10,'BUL'  :  4,'ROU'  :  7,'CRO'  :  6,'SVN'  :  6, }
    const Agri_job = {'AUT'  :  6,'HUN'  :  8,'SVK'  :  4,'CZE'  :  2,'POL'  :  8,'LIT'  :  9,'LAT'  :  9,'EST'  :  4,'FIN'  :  4,'SWE'  :  2,'DAN'  :  3,'GER'  :  2,'LUX'  :  2,'HOL'  :  2,'BEL'  :  1,'IRL'  :  6,'FRA'  :  3,'POR'  :  7,'ESP'  :  6,'ITA'  :  5,'MAL'  :  5,'GRE'  :  10,'CYP'  :  9,'BUL'  :  7,'ROU'  :  10,'CRO'  :  7,'SVN'  :  10, }
    const Air_passenger = {'AUT'  :  7,'HUN'  :  2,'SVK'  :  1,'CZE'  :  2,'POL'  :  2,'LIT'  :  4,'LAT'  :  7,'EST'  :  4,'FIN'  :  6,'SWE'  :  6,'DAN'  :  8,'GER'  :  5,'LUX'  :  10,'HOL'  :  8,'BEL'  :  6,'IRL'  :  9,'FRA'  :  5,'POR'  :  9,'ESP'  :  7,'ITA'  :  4,'MAL'  :  10,'GRE'  :  9,'CYP'  :  10,'BUL'  :  3,'ROU'  :  2,'CRO'  :  3,'SVN'  :  2, }
    const Alcohol_liter = {'AUT'  :  7,'HUN'  :  5,'SVK'  :  5,'CZE'  :  10,'POL'  :  6,'LIT'  :  10,'LAT'  :  9,'EST'  :  2,'FIN'  :  4,'SWE'  :  2,'DAN'  :  3,'GER'  :  9,'LUX'  :  10,'HOL'  :  2,'BEL'  :  4,'IRL'  :  9,'FRA'  :  7,'POR'  :  7,'ESP'  :  8,'ITA'  :  1,'MAL'  :  2,'GRE'  :  3,'CYP'  :  4,'BUL'  :  8,'ROU'  :  6,'CRO'  :  2,'SVN'  :  6, }
    const All_Debts = {'AUT'  :  4,'HUN'  :  5,'SVK'  :  3,'CZE'  :  3,'POL'  :  2,'LIT'  :  2,'LAT'  :  2,'EST'  :  2,'FIN'  :  5,'SWE'  :  7,'DAN'  :  9,'GER'  :  8,'LUX'  :  10,'HOL'  :  9,'BEL'  :  8,'IRL'  :  10,'FRA'  :  8,'POR'  :  7,'ESP'  :  5,'ITA'  :  6,'MAL'  :  5,'GRE'  :  6,'CYP'  :  10,'BUL'  :  5,'ROU'  :  1,'CRO'  :  4,'SVN'  :  3, }
    const Artists = {'AUT'  :  7,'HUN'  :  7,'SVK'  :  4,'CZE'  :  8,'POL'  :  9,'LIT'  :  3,'LAT'  :  2,'EST'  :  2,'FIN'  :  6,'SWE'  :  8,'DAN'  :  6,'GER'  :  10,'LUX'  :  2,'HOL'  :  9,'BEL'  :  7,'IRL'  :  4,'FRA'  :  10,'POR'  :  6,'ESP'  :  9,'ITA'  :  10,'MAL'  :  1,'GRE'  :  5,'CYP'  :  2,'BUL'  :  5,'ROU'  :  5,'CRO'  :  3,'SVN'  :  2, }
    const Baby_Boomer = {'AUT'  :  3,'HUN'  :  8,'SVK'  :  2,'CZE'  :  10,'POL'  :  3,'LIT'  :  4,'LAT'  :  6,'EST'  :  5,'FIN'  :  10,'SWE'  :  7,'DAN'  :  8,'GER'  :  7,'LUX'  :  2,'HOL'  :  6,'BEL'  :  2,'IRL'  :  2,'FRA'  :  4,'POR'  :  9,'ESP'  :  2,'ITA'  :  9,'MAL'  :  5,'GRE'  :  7,'CYP'  :  1,'BUL'  :  10,'ROU'  :  4,'CRO'  :  9,'SVN'  :  6, }
    const Beach_house = {'AUT'  :  7,'HUN'  :  3,'SVK'  :  5,'CZE'  :  8,'POL'  :  5,'LIT'  :  10,'LAT'  :  5,'EST'  :  10,'FIN'  :  6,'SWE'  :  5,'DAN'  :  5,'GER'  :  10,'LUX'  :  3,'HOL'  :  5,'BEL'  :  2,'IRL'  :  1,'FRA'  :  4,'POR'  :  6,'ESP'  :  9,'ITA'  :  8,'MAL'  :  6,'GRE'  :  9,'CYP'  :  2,'BUL'  :  7,'ROU'  :  4,'CRO'  :  2,'SVN'  :  2, }
    const Biocapacity = {'AUT'  :  3,'HUN'  :  7,'SVK'  :  8,'CZE'  :  7,'POL'  :  6,'LIT'  :  3,'LAT'  :  10,'EST'  :  10,'FIN'  :  5,'SWE'  :  4,'DAN'  :  10,'GER'  :  2,'LUX'  :  4,'HOL'  :  2,'BEL'  :  2,'IRL'  :  9,'FRA'  :  7,'POR'  :  4,'ESP'  :  5,'ITA'  :  2,'MAL'  :  2,'GRE'  :  6,'CYP'  :  1,'BUL'  :  9,'ROU'  :  8,'CRO'  :  9,'SVN'  :  6, }
    const Birth = {'AUT'  :  5,'HUN'  :  4,'SVK'  :  9,'CZE'  :  9,'POL'  :  7,'LIT'  :  6,'LAT'  :  6,'EST'  :  9,'FIN'  :  2,'SWE'  :  10,'DAN'  :  9,'GER'  :  4,'LUX'  :  7,'HOL'  :  6,'BEL'  :  7,'IRL'  :  10,'FRA'  :  10,'POR'  :  2,'ESP'  :  2,'ITA'  :  1,'MAL'  :  2,'GRE'  :  2,'CYP'  :  8,'BUL'  :  3,'ROU'  :  5,'CRO'  :  3,'SVN'  :  4, }
    const Business_job = {'AUT'  :  8,'HUN'  :  4,'SVK'  :  5,'CZE'  :  9,'POL'  :  2,'LIT'  :  10,'LAT'  :  7,'EST'  :  7,'FIN'  :  4,'SWE'  :  7,'DAN'  :  5,'GER'  :  10,'LUX'  :  10,'HOL'  :  9,'BEL'  :  2,'IRL'  :  6,'FRA'  :  2,'POR'  :  9,'ESP'  :  3,'ITA'  :  2,'MAL'  :  8,'GRE'  :  2,'CYP'  :  6,'BUL'  :  4,'ROU'  :  1,'CRO'  :  3,'SVN'  :  6, }
    const Business_number = {'AUT'  :  2,'HUN'  :  7,'SVK'  :  10,'CZE'  :  10,'POL'  :  4,'LIT'  :  9,'LAT'  :  5,'EST'  :  6,'FIN'  :  2,'SWE'  :  7,'DAN'  :  2,'GER'  :  2,'LUX'  :  4,'HOL'  :  9,'BEL'  :  6,'IRL'  :  4,'FRA'  :  2,'POR'  :  10,'ESP'  :  5,'ITA'  :  6,'MAL'  :  7,'GRE'  :  8,'CYP'  :  8,'BUL'  :  3,'ROU'  :  1,'CRO'  :  3,'SVN'  :  9, }
    const CO2 = {'AUT'  :  7,'HUN'  :  4,'SVK'  :  6,'CZE'  :  10,'POL'  :  7,'LIT'  :  2,'LAT'  :  2,'EST'  :  9,'FIN'  :  4,'SWE'  :  1,'DAN'  :  6,'GER'  :  9,'LUX'  :  10,'HOL'  :  10,'BEL'  :  9,'IRL'  :  8,'FRA'  :  3,'POR'  :  3,'ESP'  :  4,'ITA'  :  5,'MAL'  :  2,'GRE'  :  6,'CYP'  :  8,'BUL'  :  5,'ROU'  :  2,'CRO'  :  2,'SVN'  :  7, }
    const CO2_agri = {'AUT'  :  6,'HUN'  :  7,'SVK'  :  5,'CZE'  :  9,'POL'  :  8,'LIT'  :  4,'LAT'  :  8,'EST'  :  4,'FIN'  :  10,'SWE'  :  5,'DAN'  :  9,'GER'  :  10,'LUX'  :  7,'HOL'  :  2,'BEL'  :  6,'IRL'  :  10,'FRA'  :  9,'POR'  :  2,'ESP'  :  3,'ITA'  :  3,'MAL'  :  5,'GRE'  :  2,'CYP'  :  1,'BUL'  :  2,'ROU'  :  3,'CRO'  :  7,'SVN'  :  5, }
    const CO2_electricity = {'AUT'  :  3,'HUN'  :  5,'SVK'  :  4,'CZE'  :  10,'POL'  :  9,'LIT'  :  2,'LAT'  :  2,'EST'  :  10,'FIN'  :  8,'SWE'  :  2,'DAN'  :  4,'GER'  :  9,'LUX'  :  2,'HOL'  :  7,'BEL'  :  6,'IRL'  :  6,'FRA'  :  1,'POR'  :  4,'ESP'  :  2,'ITA'  :  6,'MAL'  :  7,'GRE'  :  7,'CYP'  :  10,'BUL'  :  9,'ROU'  :  5,'CRO'  :  3,'SVN'  :  8, }
    const CO2_transport = {'AUT'  :  3,'HUN'  :  3,'SVK'  :  4,'CZE'  :  6,'POL'  :  2,'LIT'  :  10,'LAT'  :  8,'EST'  :  8,'FIN'  :  9,'SWE'  :  2,'DAN'  :  10,'GER'  :  7,'LUX'  :  10,'HOL'  :  7,'BEL'  :  7,'IRL'  :  9,'FRA'  :  2,'POR'  :  4,'ESP'  :  6,'ITA'  :  4,'MAL'  :  5,'GRE'  :  9,'CYP'  :  1,'BUL'  :  6,'ROU'  :  2,'CRO'  :  2,'SVN'  :  5, }
    const Cancer = {'AUT'  :  3,'HUN'  :  10,'SVK'  :  3,'CZE'  :  6,'POL'  :  7,'LIT'  :  7,'LAT'  :  8,'EST'  :  4,'FIN'  :  2,'SWE'  :  2,'DAN'  :  9,'GER'  :  10,'LUX'  :  2,'HOL'  :  9,'BEL'  :  5,'IRL'  :  1,'FRA'  :  6,'POR'  :  7,'ESP'  :  4,'ITA'  :  9,'MAL'  :  2,'GRE'  :  8,'CYP'  :  2,'BUL'  :  5,'ROU'  :  4,'CRO'  :  10,'SVN'  :  6, }
    const Centenary = {'AUT'  :  5,'HUN'  :  1,'SVK'  :  1,'CZE'  :  1,'POL'  :  6,'LIT'  :  1,'LAT'  :  1,'EST'  :  1,'FIN'  :  7,'SWE'  :  8,'DAN'  :  7,'GER'  :  9,'LUX'  :  1,'HOL'  :  6,'BEL'  :  7,'IRL'  :  9,'FRA'  :  10,'POR'  :  8,'ESP'  :  10,'ITA'  :  9,'MAL'  :  1,'GRE'  :  10,'CYP'  :  1,'BUL'  :  1,'ROU'  :  5,'CRO'  :  1,'SVN'  :  1, }
    const Child = {'AUT'  :  5,'HUN'  :  4,'SVK'  :  9,'CZE'  :  8,'POL'  :  6,'LIT'  :  7,'LAT'  :  9,'EST'  :  9,'FIN'  :  3,'SWE'  :  10,'DAN'  :  7,'GER'  :  4,'LUX'  :  7,'HOL'  :  5,'BEL'  :  10,'IRL'  :  10,'FRA'  :  8,'POR'  :  2,'ESP'  :  2,'ITA'  :  1,'MAL'  :  3,'GRE'  :  2,'CYP'  :  5,'BUL'  :  3,'ROU'  :  6,'CRO'  :  2,'SVN'  :  5, }
    const Climate_change_death = {'AUT'  :  1,'HUN'  :  1,'SVK'  :  1,'CZE'  :  1,'POL'  :  1,'LIT'  :  1,'LAT'  :  1,'EST'  :  1,'FIN'  :  1,'SWE'  :  1,'DAN'  :  1,'GER'  :  1,'LUX'  :  1,'HOL'  :  1,'BEL'  :  1,'IRL'  :  1,'FRA'  :  9,'POR'  :  1,'ESP'  :  1,'ITA'  :  10,'MAL'  :  1,'GRE'  :  10,'CYP'  :  1,'BUL'  :  1,'ROU'  :  10,'CRO'  :  1,'SVN'  :  1, }
    const Cloth_Price_Index = {'AUT'  :  9,'HUN'  :  7,'SVK'  :  8,'CZE'  :  9,'POL'  :  1,'LIT'  :  6,'LAT'  :  5,'EST'  :  10,'FIN'  :  4,'SWE'  :  6,'DAN'  :  2,'GER'  :  8,'LUX'  :  10,'HOL'  :  6,'BEL'  :  7,'IRL'  :  2,'FRA'  :  5,'POR'  :  2,'ESP'  :  9,'ITA'  :  7,'MAL'  :  2,'GRE'  :  2,'CYP'  :  3,'BUL'  :  4,'ROU'  :  10,'CRO'  :  4,'SVN'  :  3, }
    const Coastal_line = {'AUT'  :  1,'HUN'  :  1,'SVK'  :  1,'CZE'  :  1,'POL'  :  9,'LIT'  :  3,'LAT'  :  10,'EST'  :  4,'FIN'  :  4,'SWE'  :  4,'DAN'  :  4,'GER'  :  4,'LUX'  :  1,'HOL'  :  10,'BEL'  :  3,'IRL'  :  4,'FRA'  :  4,'POR'  :  4,'ESP'  :  4,'ITA'  :  4,'MAL'  :  9,'GRE'  :  4,'CYP'  :  10,'BUL'  :  9,'ROU'  :  8,'CRO'  :  4,'SVN'  :  2, }
    const Consumption = {'AUT'  :  9,'HUN'  :  2,'SVK'  :  3,'CZE'  :  3,'POL'  :  2,'LIT'  :  4,'LAT'  :  2,'EST'  :  4,'FIN'  :  9,'SWE'  :  10,'DAN'  :  10,'GER'  :  8,'LUX'  :  10,'HOL'  :  9,'BEL'  :  8,'IRL'  :  7,'FRA'  :  7,'POR'  :  5,'ESP'  :  6,'ITA'  :  7,'MAL'  :  6,'GRE'  :  4,'CYP'  :  6,'BUL'  :  1,'ROU'  :  2,'CRO'  :  2,'SVN'  :  5, }
    const Crimes = {'AUT'  :  8,'HUN'  :  6,'SVK'  :  2,'CZE'  :  4,'POL'  :  4,'LIT'  :  3,'LAT'  :  3,'EST'  :  5,'FIN'  :  10,'SWE'  :  10,'DAN'  :  9,'GER'  :  9,'LUX'  :  7,'HOL'  :  9,'BEL'  :  10,'IRL'  :  2,'FRA'  :  8,'POR'  :  5,'ESP'  :  7,'ITA'  :  7,'MAL'  :  4,'GRE'  :  6,'CYP'  :  1,'BUL'  :  2,'ROU'  :  2,'CRO'  :  2,'SVN'  :  6, }
    const Debt_household = {'AUT'  :  5,'HUN'  :  2,'SVK'  :  4,'CZE'  :  3,'POL'  :  3,'LIT'  :  2,'LAT'  :  2,'EST'  :  4,'FIN'  :  9,'SWE'  :  9,'DAN'  :  10,'GER'  :  6,'LUX'  :  10,'HOL'  :  10,'BEL'  :  8,'IRL'  :  8,'FRA'  :  7,'POR'  :  7,'ESP'  :  7,'ITA'  :  4,'MAL'  :  6,'GRE'  :  5,'CYP'  :  9,'BUL'  :  6,'ROU'  :  1,'CRO'  :  2,'SVN'  :  2, }
    const Doctor = {'AUT'  :  10,'HUN'  :  5,'SVK'  :  5,'CZE'  :  8,'POL'  :  2,'LIT'  :  10,'LAT'  :  4,'EST'  :  9,'FIN'  :  6,'SWE'  :  7,'DAN'  :  7,'GER'  :  9,'LUX'  :  2,'HOL'  :  6,'BEL'  :  3,'IRL'  :  4,'FRA'  :  4,'POR'  :  9,'ESP'  :  6,'ITA'  :  7,'MAL'  :  2,'GRE'  :  10,'CYP'  :  1,'BUL'  :  8,'ROU'  :  2,'CRO'  :  2,'SVN'  :  3, }
    const Drug_use = {'AUT'  :  6,'HUN'  :  1,'SVK'  :  2,'CZE'  :  3,'POL'  :  2,'LIT'  :  10,'LAT'  :  7,'EST'  :  10,'FIN'  :  10,'SWE'  :  9,'DAN'  :  9,'GER'  :  7,'LUX'  :  8,'HOL'  :  3,'BEL'  :  7,'IRL'  :  9,'FRA'  :  8,'POR'  :  4,'ESP'  :  4,'ITA'  :  2,'MAL'  :  4,'GRE'  :  5,'CYP'  :  6,'BUL'  :  2,'ROU'  :  5,'CRO'  :  5,'SVN'  :  2, }
    const Education_Price_Index = {'AUT'  :  6,'HUN'  :  7,'SVK'  :  5,'CZE'  :  7,'POL'  :  8,'LIT'  :  10,'LAT'  :  4,'EST'  :  2,'FIN'  :  5,'SWE'  :  6,'DAN'  :  9,'GER'  :  2,'LUX'  :  10,'HOL'  :  2,'BEL'  :  10,'IRL'  :  8,'FRA'  :  7,'POR'  :  3,'ESP'  :  4,'ITA'  :  1,'MAL'  :  3,'GRE'  :  2,'CYP'  :  4,'BUL'  :  9,'ROU'  :  9,'CRO'  :  2,'SVN'  :  6, }
    const Electricity_renewable = {'AUT'  :  10,'HUN'  :  2,'SVK'  :  4,'CZE'  :  2,'POL'  :  2,'LIT'  :  3,'LAT'  :  9,'EST'  :  4,'FIN'  :  7,'SWE'  :  10,'DAN'  :  10,'GER'  :  8,'LUX'  :  2,'HOL'  :  3,'BEL'  :  4,'IRL'  :  7,'FRA'  :  5,'POR'  :  9,'ESP'  :  7,'ITA'  :  6,'MAL'  :  1,'GRE'  :  6,'CYP'  :  2,'BUL'  :  5,'ROU'  :  8,'CRO'  :  9,'SVN'  :  6, }
    const Electricity_use = {'AUT'  :  9,'HUN'  :  2,'SVK'  :  4,'CZE'  :  6,'POL'  :  2,'LIT'  :  2,'LAT'  :  2,'EST'  :  7,'FIN'  :  10,'SWE'  :  10,'DAN'  :  6,'GER'  :  7,'LUX'  :  10,'HOL'  :  8,'BEL'  :  9,'IRL'  :  7,'FRA'  :  9,'POR'  :  3,'ESP'  :  5,'ITA'  :  5,'MAL'  :  4,'GRE'  :  4,'CYP'  :  6,'BUL'  :  3,'ROU'  :  1,'CRO'  :  2,'SVN'  :  8, }
    const Energy_Price_Index = {'AUT'  :  8,'HUN'  :  7,'SVK'  :  6,'CZE'  :  9,'POL'  :  10,'LIT'  :  2,'LAT'  :  4,'EST'  :  5,'FIN'  :  9,'SWE'  :  8,'DAN'  :  2,'GER'  :  5,'LUX'  :  3,'HOL'  :  7,'BEL'  :  6,'IRL'  :  10,'FRA'  :  4,'POR'  :  3,'ESP'  :  2,'ITA'  :  2,'MAL'  :  6,'GRE'  :  1,'CYP'  :  4,'BUL'  :  9,'ROU'  :  10,'CRO'  :  2,'SVN'  :  7, }
    const Family_size = {'AUT'  :  4,'HUN'  :  7,'SVK'  :  10,'CZE'  :  7,'POL'  :  10,'LIT'  :  2,'LAT'  :  4,'EST'  :  2,'FIN'  :  2,'SWE'  :  1,'DAN'  :  2,'GER'  :  2,'LUX'  :  7,'HOL'  :  4,'BEL'  :  7,'IRL'  :  10,'FRA'  :  4,'POR'  :  8,'ESP'  :  8,'ITA'  :  7,'MAL'  :  8,'GRE'  :  7,'CYP'  :  10,'BUL'  :  7,'ROU'  :  10,'CRO'  :  10,'SVN'  :  7, }
    const Female = {'AUT'  :  7,'HUN'  :  5,'SVK'  :  5,'CZE'  :  6,'POL'  :  3,'LIT'  :  9,'LAT'  :  5,'EST'  :  8,'FIN'  :  7,'SWE'  :  8,'DAN'  :  9,'GER'  :  10,'LUX'  :  4,'HOL'  :  10,'BEL'  :  3,'IRL'  :  4,'FRA'  :  5,'POR'  :  9,'ESP'  :  2,'ITA'  :  1,'MAL'  :  3,'GRE'  :  2,'CYP'  :  10,'BUL'  :  6,'ROU'  :  2,'CRO'  :  2,'SVN'  :  7, }
    const Female_Retirement_age = {'AUT'  :  3,'HUN'  :  2,'SVK'  :  1,'CZE'  :  5,'POL'  :  2,'LIT'  :  7,'LAT'  :  9,'EST'  :  10,'FIN'  :  8,'SWE'  :  9,'DAN'  :  7,'GER'  :  8,'LUX'  :  4,'HOL'  :  7,'BEL'  :  2,'IRL'  :  9,'FRA'  :  3,'POR'  :  10,'ESP'  :  4,'ITA'  :  6,'MAL'  :  5,'GRE'  :  2,'CYP'  :  6,'BUL'  :  6,'ROU'  :  10,'CRO'  :  4,'SVN'  :  2, }
    const Footprint = {'AUT'  :  8,'HUN'  :  2,'SVK'  :  4,'CZE'  :  7,'POL'  :  4,'LIT'  :  7,'LAT'  :  9,'EST'  :  10,'FIN'  :  9,'SWE'  :  10,'DAN'  :  10,'GER'  :  6,'LUX'  :  2,'HOL'  :  6,'BEL'  :  9,'IRL'  :  6,'FRA'  :  5,'POR'  :  3,'ESP'  :  2,'ITA'  :  5,'MAL'  :  8,'GRE'  :  4,'CYP'  :  1,'BUL'  :  2,'ROU'  :  2,'CRO'  :  3,'SVN'  :  7, }
    const GDP = {'AUT'  :  8,'HUN'  :  2,'SVK'  :  3,'CZE'  :  4,'POL'  :  2,'LIT'  :  4,'LAT'  :  3,'EST'  :  5,'FIN'  :  9,'SWE'  :  9,'DAN'  :  10,'GER'  :  8,'LUX'  :  10,'HOL'  :  9,'BEL'  :  7,'IRL'  :  10,'FRA'  :  7,'POR'  :  4,'ESP'  :  6,'ITA'  :  7,'MAL'  :  6,'GRE'  :  2,'CYP'  :  6,'BUL'  :  1,'ROU'  :  2,'CRO'  :  2,'SVN'  :  5, }
    const Gini = {'AUT'  :  3,'HUN'  :  5,'SVK'  :  1,'CZE'  :  2,'POL'  :  3,'LIT'  :  10,'LAT'  :  10,'EST'  :  7,'FIN'  :  2,'SWE'  :  2,'DAN'  :  4,'GER'  :  9,'LUX'  :  8,'HOL'  :  4,'BEL'  :  2,'IRL'  :  5,'FRA'  :  6,'POR'  :  8,'ESP'  :  8,'ITA'  :  9,'MAL'  :  6,'GRE'  :  7,'CYP'  :  6,'BUL'  :  10,'ROU'  :  9,'CRO'  :  5,'SVN'  :  2, }
    const Happy = {'AUT'  :  9,'HUN'  :  2,'SVK'  :  5,'CZE'  :  7,'POL'  :  5,'LIT'  :  4,'LAT'  :  3,'EST'  :  2,'FIN'  :  10,'SWE'  :  9,'DAN'  :  10,'GER'  :  8,'LUX'  :  9,'HOL'  :  10,'BEL'  :  7,'IRL'  :  8,'FRA'  :  6,'POR'  :  2,'ESP'  :  6,'ITA'  :  6,'MAL'  :  7,'GRE'  :  2,'CYP'  :  3,'BUL'  :  1,'ROU'  :  4,'CRO'  :  2,'SVN'  :  4, }
    const Healthcare_expenditure = {'AUT'  :  9,'HUN'  :  2,'SVK'  :  4,'CZE'  :  5,'POL'  :  2,'LIT'  :  3,'LAT'  :  2,'EST'  :  4,'FIN'  :  7,'SWE'  :  8,'DAN'  :  10,'GER'  :  9,'LUX'  :  10,'HOL'  :  10,'BEL'  :  8,'IRL'  :  9,'FRA'  :  7,'POR'  :  5,'ESP'  :  6,'ITA'  :  7,'MAL'  :  6,'GRE'  :  3,'CYP'  :  4,'BUL'  :  1,'ROU'  :  2,'CRO'  :  2,'SVN'  :  6, }
    const Homicide = {'AUT'  :  2,'HUN'  :  7,'SVK'  :  9,'CZE'  :  5,'POL'  :  8,'LIT'  :  10,'LAT'  :  10,'EST'  :  10,'FIN'  :  7,'SWE'  :  5,'DAN'  :  2,'GER'  :  2,'LUX'  :  4,'HOL'  :  3,'BEL'  :  6,'IRL'  :  1,'FRA'  :  3,'POR'  :  7,'ESP'  :  2,'ITA'  :  2,'MAL'  :  4,'GRE'  :  6,'CYP'  :  9,'BUL'  :  9,'ROU'  :  8,'CRO'  :  5,'SVN'  :  4, }
    const Hospital_bed = {'AUT'  :  10,'HUN'  :  10,'SVK'  :  7,'CZE'  :  10,'POL'  :  8,'LIT'  :  9,'LAT'  :  6,'EST'  :  5,'FIN'  :  6,'SWE'  :  1,'DAN'  :  2,'GER'  :  10,'LUX'  :  6,'HOL'  :  4,'BEL'  :  7,'IRL'  :  4,'FRA'  :  9,'POR'  :  2,'ESP'  :  2,'ITA'  :  2,'MAL'  :  3,'GRE'  :  4,'CYP'  :  2,'BUL'  :  8,'ROU'  :  8,'CRO'  :  5,'SVN'  :  3, }
    const Hospital_patient = {'AUT'  :  6,'HUN'  :  6,'SVK'  :  7,'CZE'  :  5,'POL'  :  2,'LIT'  :  9,'LAT'  :  9,'EST'  :  10,'FIN'  :  7,'SWE'  :  4,'DAN'  :  6,'GER'  :  2,'LUX'  :  10,'HOL'  :  2,'BEL'  :  4,'IRL'  :  5,'FRA'  :  2,'POR'  :  3,'ESP'  :  1,'ITA'  :  2,'MAL'  :  10,'GRE'  :  4,'CYP'  :  9,'BUL'  :  8,'ROU'  :  3,'CRO'  :  7,'SVN'  :  8, }
    const House_room = {'AUT'  :  6,'HUN'  :  6,'SVK'  :  4,'CZE'  :  7,'POL'  :  9,'LIT'  :  3,'LAT'  :  2,'EST'  :  2,'FIN'  :  5,'SWE'  :  7,'DAN'  :  5,'GER'  :  10,'LUX'  :  2,'HOL'  :  9,'BEL'  :  8,'IRL'  :  4,'FRA'  :  10,'POR'  :  7,'ESP'  :  10,'ITA'  :  9,'MAL'  :  1,'GRE'  :  6,'CYP'  :  2,'BUL'  :  4,'ROU'  :  8,'CRO'  :  3,'SVN'  :  2, }
    const Inactive = {'AUT'  :  3,'HUN'  :  5,'SVK'  :  2,'CZE'  :  6,'POL'  :  2,'LIT'  :  5,'LAT'  :  8,'EST'  :  7,'FIN'  :  10,'SWE'  :  6,'DAN'  :  5,'GER'  :  9,'LUX'  :  2,'HOL'  :  4,'BEL'  :  2,'IRL'  :  1,'FRA'  :  7,'POR'  :  9,'ESP'  :  4,'ITA'  :  10,'MAL'  :  3,'GRE'  :  10,'CYP'  :  5,'BUL'  :  9,'ROU'  :  3,'CRO'  :  8,'SVN'  :  7, }
    const Job = {'AUT'  :  6,'HUN'  :  8,'SVK'  :  4,'CZE'  :  9,'POL'  :  5,'LIT'  :  7,'LAT'  :  7,'EST'  :  9,'FIN'  :  7,'SWE'  :  10,'DAN'  :  9,'GER'  :  10,'LUX'  :  3,'HOL'  :  10,'BEL'  :  2,'IRL'  :  4,'FRA'  :  3,'POR'  :  5,'ESP'  :  2,'ITA'  :  2,'MAL'  :  8,'GRE'  :  1,'CYP'  :  6,'BUL'  :  4,'ROU'  :  2,'CRO'  :  2,'SVN'  :  6, }
    const Job_travel = {'AUT'  :  9,'HUN'  :  2,'SVK'  :  4,'CZE'  :  4,'POL'  :  8,'LIT'  :  10,'LAT'  :  10,'EST'  :  4,'FIN'  :  2,'SWE'  :  4,'DAN'  :  4,'GER'  :  3,'LUX'  :  9,'HOL'  :  3,'BEL'  :  1,'IRL'  :  4,'FRA'  :  2,'POR'  :  4,'ESP'  :  3,'ITA'  :  4,'MAL'  :  4,'GRE'  :  1,'CYP'  :  4,'BUL'  :  9,'ROU'  :  8,'CRO'  :  4,'SVN'  :  10, }
    const Jobless = {'AUT'  :  5,'HUN'  :  2,'SVK'  :  6,'CZE'  :  1,'POL'  :  2,'LIT'  :  9,'LAT'  :  9,'EST'  :  7,'FIN'  :  9,'SWE'  :  10,'DAN'  :  5,'GER'  :  2,'LUX'  :  6,'HOL'  :  2,'BEL'  :  4,'IRL'  :  4,'FRA'  :  7,'POR'  :  7,'ESP'  :  10,'ITA'  :  8,'MAL'  :  2,'GRE'  :  10,'CYP'  :  9,'BUL'  :  4,'ROU'  :  3,'CRO'  :  6,'SVN'  :  4, }
    const LGBT_acceptance = {'AUT'  :  6,'HUN'  :  3,'SVK'  :  4,'CZE'  :  5,'POL'  :  2,'LIT'  :  1,'LAT'  :  2,'EST'  :  3,'FIN'  :  7,'SWE'  :  10,'DAN'  :  10,'GER'  :  7,'LUX'  :  8,'HOL'  :  10,'BEL'  :  10,'IRL'  :  10,'FRA'  :  7,'POR'  :  6,'ESP'  :  10,'ITA'  :  6,'MAL'  :  8,'GRE'  :  4,'CYP'  :  4,'BUL'  :  2,'ROU'  :  1,'CRO'  :  4,'SVN'  :  5, }
    const Labor_cost_annual = {'AUT'  :  9,'HUN'  :  2,'SVK'  :  3,'CZE'  :  4,'POL'  :  2,'LIT'  :  2,'LAT'  :  2,'EST'  :  4,'FIN'  :  8,'SWE'  :  10,'DAN'  :  10,'GER'  :  8,'LUX'  :  10,'HOL'  :  9,'BEL'  :  9,'IRL'  :  7,'FRA'  :  7,'POR'  :  4,'ESP'  :  6,'ITA'  :  7,'MAL'  :  5,'GRE'  :  5,'CYP'  :  6,'BUL'  :  1,'ROU'  :  2,'CRO'  :  3,'SVN'  :  6, }
    const Land = {'AUT'  :  6,'HUN'  :  7,'SVK'  :  4,'CZE'  :  5,'POL'  :  9,'LIT'  :  4,'LAT'  :  4,'EST'  :  3,'FIN'  :  9,'SWE'  :  10,'DAN'  :  3,'GER'  :  9,'LUX'  :  2,'HOL'  :  2,'BEL'  :  2,'IRL'  :  5,'FRA'  :  10,'POR'  :  6,'ESP'  :  10,'ITA'  :  8,'MAL'  :  1,'GRE'  :  7,'CYP'  :  2,'BUL'  :  7,'ROU'  :  8,'CRO'  :  6,'SVN'  :  2, }
    const Land_polluted = {'AUT'  :  7,'HUN'  :  9,'SVK'  :  2,'CZE'  :  3,'POL'  :  3,'LIT'  :  2,'LAT'  :  9,'EST'  :  7,'FIN'  :  1,'SWE'  :  7,'DAN'  :  7,'GER'  :  7,'LUX'  :  2,'HOL'  :  7,'BEL'  :  7,'IRL'  :  7,'FRA'  :  8,'POR'  :  10,'ESP'  :  10,'ITA'  :  9,'MAL'  :  7,'GRE'  :  9,'CYP'  :  10,'BUL'  :  7,'ROU'  :  2,'CRO'  :  7,'SVN'  :  3, }
    const Land_protected = {'AUT'  :  5,'HUN'  :  7,'SVK'  :  10,'CZE'  :  4,'POL'  :  7,'LIT'  :  2,'LAT'  :  2,'EST'  :  6,'FIN'  :  2,'SWE'  :  2,'DAN'  :  1,'GER'  :  5,'LUX'  :  9,'HOL'  :  4,'BEL'  :  2,'IRL'  :  4,'FRA'  :  3,'POR'  :  7,'ESP'  :  9,'ITA'  :  6,'MAL'  :  3,'GRE'  :  9,'CYP'  :  6,'BUL'  :  10,'ROU'  :  8,'CRO'  :  8,'SVN'  :  10, }
    const Life_expectancy = {'AUT'  :  7,'HUN'  :  2,'SVK'  :  2,'CZE'  :  4,'POL'  :  3,'LIT'  :  2,'LAT'  :  1,'EST'  :  4,'FIN'  :  7,'SWE'  :  9,'DAN'  :  5,'GER'  :  5,'LUX'  :  9,'HOL'  :  8,'BEL'  :  6,'IRL'  :  8,'FRA'  :  10,'POR'  :  6,'ESP'  :  10,'ITA'  :  10,'MAL'  :  9,'GRE'  :  7,'CYP'  :  4,'BUL'  :  2,'ROU'  :  2,'CRO'  :  3,'SVN'  :  6, }
    const Malboro_Price = {'AUT'  :  7,'HUN'  :  4,'SVK'  :  2,'CZE'  :  5,'POL'  :  2,'LIT'  :  2,'LAT'  :  2,'EST'  :  4,'FIN'  :  10,'SWE'  :  8,'DAN'  :  9,'GER'  :  8,'LUX'  :  6,'HOL'  :  9,'BEL'  :  9,'IRL'  :  10,'FRA'  :  10,'POR'  :  6,'ESP'  :  6,'ITA'  :  7,'MAL'  :  7,'GRE'  :  4,'CYP'  :  6,'BUL'  :  1,'ROU'  :  2,'CRO'  :  3,'SVN'  :  3, }
    const Male_Retirement_age = {'AUT'  :  5,'HUN'  :  5,'SVK'  :  2,'CZE'  :  4,'POL'  :  3,'LIT'  :  7,'LAT'  :  9,'EST'  :  9,'FIN'  :  6,'SWE'  :  10,'DAN'  :  8,'GER'  :  6,'LUX'  :  1,'HOL'  :  8,'BEL'  :  2,'IRL'  :  9,'FRA'  :  2,'POR'  :  10,'ESP'  :  3,'ITA'  :  4,'MAL'  :  6,'GRE'  :  2,'CYP'  :  7,'BUL'  :  7,'ROU'  :  10,'CRO'  :  2,'SVN'  :  4, }
    const Manufacturing_job = {'AUT'  :  7,'HUN'  :  9,'SVK'  :  9,'CZE'  :  10,'POL'  :  7,'LIT'  :  8,'LAT'  :  4,'EST'  :  9,'FIN'  :  5,'SWE'  :  6,'DAN'  :  4,'GER'  :  10,'LUX'  :  4,'HOL'  :  2,'BEL'  :  2,'IRL'  :  3,'FRA'  :  3,'POR'  :  7,'ESP'  :  2,'ITA'  :  6,'MAL'  :  2,'GRE'  :  1,'CYP'  :  2,'BUL'  :  8,'ROU'  :  5,'CRO'  :  6,'SVN'  :  10, }
    const Marriage = {'AUT'  :  7,'HUN'  :  10,'SVK'  :  9,'CZE'  :  7,'POL'  :  6,'LIT'  :  10,'LAT'  :  10,'EST'  :  7,'FIN'  :  4,'SWE'  :  5,'DAN'  :  8,'GER'  :  7,'LUX'  :  2,'HOL'  :  3,'BEL'  :  3,'IRL'  :  4,'FRA'  :  3,'POR'  :  2,'ESP'  :  2,'ITA'  :  1,'MAL'  :  8,'GRE'  :  5,'CYP'  :  10,'BUL'  :  4,'ROU'  :  9,'CRO'  :  6,'SVN'  :  2, }
    const Math_PISA = {'AUT'  :  7,'HUN'  :  2,'SVK'  :  2,'CZE'  :  6,'POL'  :  8,'LIT'  :  3,'LAT'  :  4,'EST'  :  10,'FIN'  :  9,'SWE'  :  7,'DAN'  :  10,'GER'  :  8,'LUX'  :  4,'HOL'  :  10,'BEL'  :  9,'IRL'  :  7,'FRA'  :  6,'POR'  :  6,'ESP'  :  4,'ITA'  :  5,'MAL'  :  3,'GRE'  :  2,'CYP'  :  1,'BUL'  :  2,'ROU'  :  5,'CRO'  :  2,'SVN'  :  9, }
    const Median_age = {'AUT'  :  9,'HUN'  :  4,'SVK'  :  2,'CZE'  :  3,'POL'  :  2,'LIT'  :  3,'LAT'  :  7,'EST'  :  5,'FIN'  :  8,'SWE'  :  5,'DAN'  :  6,'GER'  :  10,'LUX'  :  2,'HOL'  :  7,'BEL'  :  6,'IRL'  :  2,'FRA'  :  4,'POR'  :  7,'ESP'  :  6,'ITA'  :  10,'MAL'  :  4,'GRE'  :  9,'CYP'  :  1,'BUL'  :  10,'ROU'  :  3,'CRO'  :  9,'SVN'  :  8, }
    const Nurse = {'AUT'  :  4,'HUN'  :  4,'SVK'  :  3,'CZE'  :  6,'POL'  :  3,'LIT'  :  6,'LAT'  :  2,'EST'  :  7,'FIN'  :  10,'SWE'  :  9,'DAN'  :  7,'GER'  :  9,'LUX'  :  9,'HOL'  :  8,'BEL'  :  10,'IRL'  :  10,'FRA'  :  8,'POR'  :  4,'ESP'  :  2,'ITA'  :  2,'MAL'  :  6,'GRE'  :  1,'CYP'  :  2,'BUL'  :  2,'ROU'  :  5,'CRO'  :  5,'SVN'  :  7, }
    const Obesity = {'AUT'  :  2,'HUN'  :  5,'SVK'  :  4,'CZE'  :  7,'POL'  :  3,'LIT'  :  2,'LAT'  :  3,'EST'  :  7,'FIN'  :  2,'SWE'  :  8,'DAN'  :  10,'GER'  :  4,'LUX'  :  9,'HOL'  :  1,'BEL'  :  2,'IRL'  :  10,'FRA'  :  3,'POR'  :  6,'ESP'  :  7,'ITA'  :  5,'MAL'  :  10,'GRE'  :  8,'CYP'  :  5,'BUL'  :  9,'ROU'  :  5,'CRO'  :  6,'SVN'  :  9, }
    const Pisa = {'AUT'  :  6,'HUN'  :  2,'SVK'  :  2,'CZE'  :  5,'POL'  :  8,'LIT'  :  3,'LAT'  :  4,'EST'  :  10,'FIN'  :  10,'SWE'  :  7,'DAN'  :  8,'GER'  :  9,'LUX'  :  4,'HOL'  :  9,'BEL'  :  7,'IRL'  :  9,'FRA'  :  6,'POR'  :  7,'ESP'  :  6,'ITA'  :  4,'MAL'  :  2,'GRE'  :  2,'CYP'  :  2,'BUL'  :  2,'ROU'  :  5,'CRO'  :  3,'SVN'  :  10, }
    const Police_officers = {'AUT'  :  5,'HUN'  :  4,'SVK'  :  8,'CZE'  :  7,'POL'  :  3,'LIT'  :  7,'LAT'  :  9,'EST'  :  3,'FIN'  :  1,'SWE'  :  2,'DAN'  :  2,'GER'  :  5,'LUX'  :  2,'HOL'  :  2,'BEL'  :  5,'IRL'  :  4,'FRA'  :  6,'POR'  :  9,'ESP'  :  9,'ITA'  :  8,'MAL'  :  6,'GRE'  :  10,'CYP'  :  10,'BUL'  :  5,'ROU'  :  3,'CRO'  :  10,'SVN'  :  7, }
    const Population = {'AUT'  :  6,'HUN'  :  6,'SVK'  :  4,'CZE'  :  7,'POL'  :  9,'LIT'  :  3,'LAT'  :  2,'EST'  :  2,'FIN'  :  4,'SWE'  :  7,'DAN'  :  5,'GER'  :  10,'LUX'  :  2,'HOL'  :  8,'BEL'  :  8,'IRL'  :  4,'FRA'  :  10,'POR'  :  6,'ESP'  :  9,'ITA'  :  10,'MAL'  :  1,'GRE'  :  7,'CYP'  :  2,'BUL'  :  5,'ROU'  :  9,'CRO'  :  3,'SVN'  :  2, }
    const Poverty_risk = {'AUT'  :  6,'HUN'  :  6,'SVK'  :  3,'CZE'  :  5,'POL'  :  9,'LIT'  :  3,'LAT'  :  2,'EST'  :  2,'FIN'  :  4,'SWE'  :  6,'DAN'  :  4,'GER'  :  10,'LUX'  :  2,'HOL'  :  8,'BEL'  :  7,'IRL'  :  5,'FRA'  :  9,'POR'  :  7,'ESP'  :  10,'ITA'  :  10,'MAL'  :  1,'GRE'  :  8,'CYP'  :  2,'BUL'  :  7,'ROU'  :  9,'CRO'  :  4,'SVN'  :  2, }
    const Prisoners = {'AUT'  :  5,'HUN'  :  8,'SVK'  :  7,'CZE'  :  9,'POL'  :  9,'LIT'  :  10,'LAT'  :  10,'EST'  :  10,'FIN'  :  1,'SWE'  :  2,'DAN'  :  2,'GER'  :  4,'LUX'  :  6,'HOL'  :  4,'BEL'  :  4,'IRL'  :  2,'FRA'  :  5,'POR'  :  7,'ESP'  :  7,'ITA'  :  3,'MAL'  :  3,'GRE'  :  6,'CYP'  :  2,'BUL'  :  9,'ROU'  :  8,'CRO'  :  6,'SVN'  :  2, }
    const Railway_length = {'AUT'  :  7,'HUN'  :  5,'SVK'  :  4,'CZE'  :  8,'POL'  :  10,'LIT'  :  2,'LAT'  :  2,'EST'  :  2,'FIN'  :  5,'SWE'  :  8,'DAN'  :  7,'GER'  :  10,'LUX'  :  1,'HOL'  :  7,'BEL'  :  7,'IRL'  :  2,'FRA'  :  10,'POR'  :  3,'ESP'  :  9,'ITA'  :  9,'MAL'  :  7,'GRE'  :  3,'CYP'  :  7,'BUL'  :  4,'ROU'  :  9,'CRO'  :  4,'SVN'  :  2, }
    const Reading = {'AUT'  :  4,'HUN'  :  2,'SVK'  :  2,'CZE'  :  5,'POL'  :  9,'LIT'  :  3,'LAT'  :  6,'EST'  :  10,'FIN'  :  10,'SWE'  :  8,'DAN'  :  7,'GER'  :  9,'LUX'  :  3,'HOL'  :  8,'BEL'  :  7,'IRL'  :  10,'FRA'  :  7,'POR'  :  6,'ESP'  :  6,'ITA'  :  4,'MAL'  :  2,'GRE'  :  2,'CYP'  :  2,'BUL'  :  1,'ROU'  :  5,'CRO'  :  4,'SVN'  :  9, }
    const Reading_books = {'AUT'  :  2,'HUN'  :  9,'SVK'  :  7,'CZE'  :  7,'POL'  :  10,'LIT'  :  8,'LAT'  :  9,'EST'  :  10,'FIN'  :  10,'SWE'  :  7,'DAN'  :  7,'GER'  :  4,'LUX'  :  4,'HOL'  :  3,'BEL'  :  3,'IRL'  :  7,'FRA'  :  1,'POR'  :  7,'ESP'  :  3,'ITA'  :  2,'MAL'  :  7,'GRE'  :  9,'CYP'  :  7,'BUL'  :  8,'ROU'  :  2,'CRO'  :  7,'SVN'  :  4, }
    const Recycling = {'AUT'  :  10,'HUN'  :  3,'SVK'  :  7,'CZE'  :  4,'POL'  :  6,'LIT'  :  7,'LAT'  :  6,'EST'  :  2,'FIN'  :  6,'SWE'  :  5,'DAN'  :  9,'GER'  :  10,'LUX'  :  8,'HOL'  :  9,'BEL'  :  9,'IRL'  :  5,'FRA'  :  7,'POR'  :  2,'ESP'  :  4,'ITA'  :  8,'MAL'  :  1,'GRE'  :  2,'CYP'  :  2,'BUL'  :  3,'ROU'  :  2,'CRO'  :  4,'SVN'  :  10, }
    const Resting = {'AUT'  :  2,'HUN'  :  10,'SVK'  :  7,'CZE'  :  7,'POL'  :  3,'LIT'  :  2,'LAT'  :  4,'EST'  :  9,'FIN'  :  3,'SWE'  :  7,'DAN'  :  7,'GER'  :  4,'LUX'  :  1,'HOL'  :  2,'BEL'  :  8,'IRL'  :  7,'FRA'  :  9,'POR'  :  7,'ESP'  :  2,'ITA'  :  10,'MAL'  :  7,'GRE'  :  8,'CYP'  :  7,'BUL'  :  2,'ROU'  :  10,'CRO'  :  7,'SVN'  :  9, }
    const Retail_number = {'AUT'  :  2,'HUN'  :  6,'SVK'  :  8,'CZE'  :  10,'POL'  :  6,'LIT'  :  9,'LAT'  :  6,'EST'  :  5,'FIN'  :  2,'SWE'  :  4,'DAN'  :  2,'GER'  :  1,'LUX'  :  4,'HOL'  :  7,'BEL'  :  4,'IRL'  :  3,'FRA'  :  3,'POR'  :  10,'ESP'  :  7,'ITA'  :  8,'MAL'  :  7,'GRE'  :  10,'CYP'  :  9,'BUL'  :  9,'ROU'  :  2,'CRO'  :  2,'SVN'  :  5, }
    const Retired = {'AUT'  :  3,'HUN'  :  5,'SVK'  :  2,'CZE'  :  6,'POL'  :  2,'LIT'  :  5,'LAT'  :  8,'EST'  :  7,'FIN'  :  10,'SWE'  :  6,'DAN'  :  5,'GER'  :  9,'LUX'  :  2,'HOL'  :  4,'BEL'  :  2,'IRL'  :  1,'FRA'  :  7,'POR'  :  9,'ESP'  :  4,'ITA'  :  10,'MAL'  :  3,'GRE'  :  10,'CYP'  :  5,'BUL'  :  9,'ROU'  :  3,'CRO'  :  8,'SVN'  :  7, }
    const Road_lenght = {'AUT'  :  6,'HUN'  :  9,'SVK'  :  3,'CZE'  :  7,'POL'  :  10,'LIT'  :  5,'LAT'  :  4,'EST'  :  4,'FIN'  :  6,'SWE'  :  9,'DAN'  :  4,'GER'  :  8,'LUX'  :  2,'HOL'  :  7,'BEL'  :  9,'IRL'  :  6,'FRA'  :  10,'POR'  :  2,'ESP'  :  8,'ITA'  :  10,'MAL'  :  1,'GRE'  :  8,'CYP'  :  2,'BUL'  :  2,'ROU'  :  5,'CRO'  :  2,'SVN'  :  3, }
    const Road_passenger = {'AUT'  :  7,'HUN'  :  2,'SVK'  :  2,'CZE'  :  7,'POL'  :  9,'LIT'  :  6,'LAT'  :  2,'EST'  :  8,'FIN'  :  9,'SWE'  :  4,'DAN'  :  3,'GER'  :  8,'LUX'  :  10,'HOL'  :  4,'BEL'  :  5,'IRL'  :  3,'FRA'  :  4,'POR'  :  6,'ESP'  :  6,'ITA'  :  10,'MAL'  :  9,'GRE'  :  5,'CYP'  :  10,'BUL'  :  2,'ROU'  :  1,'CRO'  :  2,'SVN'  :  7, }
    const Salary = {'AUT'  :  7,'HUN'  :  3,'SVK'  :  5,'CZE'  :  4,'POL'  :  1,'LIT'  :  7,'LAT'  :  7,'EST'  :  9,'FIN'  :  8,'SWE'  :  6,'DAN'  :  9,'GER'  :  2,'LUX'  :  10,'HOL'  :  5,'BEL'  :  6,'IRL'  :  8,'FRA'  :  2,'POR'  :  4,'ESP'  :  2,'ITA'  :  2,'MAL'  :  10,'GRE'  :  4,'CYP'  :  10,'BUL'  :  3,'ROU'  :  2,'CRO'  :  6,'SVN'  :  9, }
    const Salary_gap_gender = {'AUT'  :  10,'HUN'  :  4,'SVK'  :  5,'CZE'  :  7,'POL'  :  2,'LIT'  :  3,'LAT'  :  6,'EST'  :  7,'FIN'  :  9,'SWE'  :  8,'DAN'  :  10,'GER'  :  10,'LUX'  :  2,'HOL'  :  8,'BEL'  :  5,'IRL'  :  8,'FRA'  :  9,'POR'  :  3,'ESP'  :  6,'ITA'  :  2,'MAL'  :  6,'GRE'  :  3,'CYP'  :  5,'BUL'  :  5,'ROU'  :  1,'CRO'  :  2,'SVN'  :  4, }
    const Salary_hour = {'AUT'  :  7,'HUN'  :  2,'SVK'  :  3,'CZE'  :  4,'POL'  :  2,'LIT'  :  2,'LAT'  :  2,'EST'  :  4,'FIN'  :  9,'SWE'  :  9,'DAN'  :  10,'GER'  :  8,'LUX'  :  10,'HOL'  :  8,'BEL'  :  9,'IRL'  :  10,'FRA'  :  7,'POR'  :  4,'ESP'  :  6,'ITA'  :  7,'MAL'  :  6,'GRE'  :  5,'CYP'  :  6,'BUL'  :  1,'ROU'  :  2,'CRO'  :  3,'SVN'  :  5, }
    const Savings = {'AUT'  :  7,'HUN'  :  2,'SVK'  :  5,'CZE'  :  9,'POL'  :  10,'LIT'  :  7,'LAT'  :  7,'EST'  :  10,'FIN'  :  6,'SWE'  :  9,'DAN'  :  3,'GER'  :  6,'LUX'  :  9,'HOL'  :  3,'BEL'  :  4,'IRL'  :  8,'FRA'  :  10,'POR'  :  2,'ESP'  :  4,'ITA'  :  8,'MAL'  :  5,'GRE'  :  1,'CYP'  :  2,'BUL'  :  4,'ROU'  :  2,'CRO'  :  2,'SVN'  :  6, }
    const Science_job = {'AUT'  :  6,'HUN'  :  7,'SVK'  :  6,'CZE'  :  5,'POL'  :  2,'LIT'  :  5,'LAT'  :  4,'EST'  :  3,'FIN'  :  4,'SWE'  :  9,'DAN'  :  7,'GER'  :  8,'LUX'  :  10,'HOL'  :  10,'BEL'  :  7,'IRL'  :  9,'FRA'  :  2,'POR'  :  6,'ESP'  :  4,'ITA'  :  2,'MAL'  :  10,'GRE'  :  3,'CYP'  :  9,'BUL'  :  2,'ROU'  :  1,'CRO'  :  2,'SVN'  :  8, }
    const Smoker = {'AUT'  :  7,'HUN'  :  7,'SVK'  :  8,'CZE'  :  8,'POL'  :  4,'LIT'  :  5,'LAT'  :  10,'EST'  :  7,'FIN'  :  2,'SWE'  :  6,'DAN'  :  1,'GER'  :  6,'LUX'  :  2,'HOL'  :  2,'BEL'  :  3,'IRL'  :  3,'FRA'  :  9,'POR'  :  6,'ESP'  :  6,'ITA'  :  2,'MAL'  :  4,'GRE'  :  10,'CYP'  :  10,'BUL'  :  10,'ROU'  :  4,'CRO'  :  9,'SVN'  :  2, }
    const Sports = {'AUT'  :  9,'HUN'  :  2,'SVK'  :  7,'CZE'  :  7,'POL'  :  3,'LIT'  :  2,'LAT'  :  4,'EST'  :  9,'FIN'  :  10,'SWE'  :  7,'DAN'  :  7,'GER'  :  10,'LUX'  :  10,'HOL'  :  9,'BEL'  :  8,'IRL'  :  7,'FRA'  :  8,'POR'  :  7,'ESP'  :  4,'ITA'  :  3,'MAL'  :  7,'GRE'  :  3,'CYP'  :  7,'BUL'  :  2,'ROU'  :  1,'CRO'  :  7,'SVN'  :  4, }
    const Student = {'AUT'  :  6,'HUN'  :  6,'SVK'  :  4,'CZE'  :  2,'POL'  :  3,'LIT'  :  4,'LAT'  :  2,'EST'  :  2,'FIN'  :  7,'SWE'  :  8,'DAN'  :  10,'GER'  :  4,'LUX'  :  9,'HOL'  :  9,'BEL'  :  8,'IRL'  :  10,'FRA'  :  9,'POR'  :  6,'ESP'  :  3,'ITA'  :  2,'MAL'  :  7,'GRE'  :  5,'CYP'  :  10,'BUL'  :  1,'ROU'  :  5,'CRO'  :  7,'SVN'  :  2, }
    const Student_high_school_cost = {'AUT'  :  9,'HUN'  :  2,'SVK'  :  3,'CZE'  :  4,'POL'  :  3,'LIT'  :  2,'LAT'  :  3,'EST'  :  5,'FIN'  :  4,'SWE'  :  9,'DAN'  :  10,'GER'  :  7,'LUX'  :  10,'HOL'  :  8,'BEL'  :  9,'IRL'  :  10,'FRA'  :  7,'POR'  :  6,'ESP'  :  5,'ITA'  :  5,'MAL'  :  8,'GRE'  :  2,'CYP'  :  7,'BUL'  :  2,'ROU'  :  2,'CRO'  :  5,'SVN'  :  6, }
    const Suicide = {'AUT'  :  7,'HUN'  :  10,'SVK'  :  4,'CZE'  :  6,'POL'  :  9,'LIT'  :  10,'LAT'  :  10,'EST'  :  7,'FIN'  :  7,'SWE'  :  5,'DAN'  :  4,'GER'  :  6,'LUX'  :  3,'HOL'  :  3,'BEL'  :  9,'IRL'  :  2,'FRA'  :  8,'POR'  :  5,'ESP'  :  2,'ITA'  :  2,'MAL'  :  2,'GRE'  :  2,'CYP'  :  2,'BUL'  :  6,'ROU'  :  4,'CRO'  :  8,'SVN'  :  9, }
    const Teacher_college = {'AUT'  :  10,'HUN'  :  7,'SVK'  :  2,'CZE'  :  3,'POL'  :  8,'LIT'  :  2,'LAT'  :  5,'EST'  :  6,'FIN'  :  7,'SWE'  :  5,'DAN'  :  7,'GER'  :  10,'LUX'  :  9,'HOL'  :  10,'BEL'  :  9,'IRL'  :  5,'FRA'  :  3,'POR'  :  8,'ESP'  :  1,'ITA'  :  6,'MAL'  :  5,'GRE'  :  4,'CYP'  :  4,'BUL'  :  2,'ROU'  :  2,'CRO'  :  9,'SVN'  :  3, }
    const Teacher_high_school = {'AUT'  :  10,'HUN'  :  7,'SVK'  :  9,'CZE'  :  2,'POL'  :  3,'LIT'  :  10,'LAT'  :  8,'EST'  :  4,'FIN'  :  5,'SWE'  :  2,'DAN'  :  4,'GER'  :  9,'LUX'  :  3,'HOL'  :  10,'BEL'  :  8,'IRL'  :  5,'FRA'  :  3,'POR'  :  7,'ESP'  :  7,'ITA'  :  2,'MAL'  :  5,'GRE'  :  6,'CYP'  :  2,'BUL'  :  1,'ROU'  :  6,'CRO'  :  9,'SVN'  :  5, }
    const Teacher_primary_school = {'AUT'  :  10,'HUN'  :  4,'SVK'  :  2,'CZE'  :  2,'POL'  :  7,'LIT'  :  2,'LAT'  :  6,'EST'  :  6,'FIN'  :  4,'SWE'  :  8,'DAN'  :  9,'GER'  :  9,'LUX'  :  9,'HOL'  :  10,'BEL'  :  7,'IRL'  :  8,'FRA'  :  3,'POR'  :  5,'ESP'  :  5,'ITA'  :  4,'MAL'  :  10,'GRE'  :  7,'CYP'  :  6,'BUL'  :  1,'ROU'  :  2,'CRO'  :  2,'SVN'  :  3, }
    const Teacher_university = {'AUT'  :  10,'HUN'  :  2,'SVK'  :  3,'CZE'  :  2,'POL'  :  4,'LIT'  :  8,'LAT'  :  7,'EST'  :  8,'FIN'  :  5,'SWE'  :  10,'DAN'  :  9,'GER'  :  9,'LUX'  :  4,'HOL'  :  9,'BEL'  :  3,'IRL'  :  4,'FRA'  :  2,'POR'  :  5,'ESP'  :  6,'ITA'  :  2,'MAL'  :  10,'GRE'  :  1,'CYP'  :  6,'BUL'  :  6,'ROU'  :  2,'CRO'  :  7,'SVN'  :  7, }
    const Tenant = {'AUT'  :  10,'HUN'  :  2,'SVK'  :  2,'CZE'  :  4,'POL'  :  2,'LIT'  :  2,'LAT'  :  4,'EST'  :  4,'FIN'  :  7,'SWE'  :  9,'DAN'  :  10,'GER'  :  10,'LUX'  :  9,'HOL'  :  8,'BEL'  :  7,'IRL'  :  7,'FRA'  :  9,'POR'  :  5,'ESP'  :  6,'ITA'  :  5,'MAL'  :  3,'GRE'  :  6,'CYP'  :  8,'BUL'  :  3,'ROU'  :  1,'CRO'  :  2,'SVN'  :  6, }
    const Tourist = {'AUT'  :  10,'HUN'  :  2,'SVK'  :  2,'CZE'  :  4,'POL'  :  2,'LIT'  :  3,'LAT'  :  3,'EST'  :  7,'FIN'  :  6,'SWE'  :  9,'DAN'  :  2,'GER'  :  5,'LUX'  :  4,'HOL'  :  6,'BEL'  :  4,'IRL'  :  6,'FRA'  :  7,'POR'  :  7,'ESP'  :  8,'ITA'  :  5,'MAL'  :  10,'GRE'  :  9,'CYP'  :  9,'BUL'  :  2,'ROU'  :  1,'CRO'  :  10,'SVN'  :  8, }
    const Urban_Rural = {'AUT'  :  5,'HUN'  :  7,'SVK'  :  2,'CZE'  :  6,'POL'  :  4,'LIT'  :  5,'LAT'  :  6,'EST'  :  7,'FIN'  :  7,'SWE'  :  2,'DAN'  :  2,'GER'  :  9,'LUX'  :  1,'HOL'  :  6,'BEL'  :  10,'IRL'  :  4,'FRA'  :  9,'POR'  :  4,'ESP'  :  9,'ITA'  :  10,'MAL'  :  10,'GRE'  :  8,'CYP'  :  2,'BUL'  :  8,'ROU'  :  3,'CRO'  :  2,'SVN'  :  3, }
    const Vegetables = {'AUT'  :  4,'HUN'  :  4,'SVK'  :  5,'CZE'  :  3,'POL'  :  2,'LIT'  :  8,'LAT'  :  9,'EST'  :  9,'FIN'  :  7,'SWE'  :  3,'DAN'  :  7,'GER'  :  2,'LUX'  :  10,'HOL'  :  2,'BEL'  :  5,'IRL'  :  7,'FRA'  :  2,'POR'  :  6,'ESP'  :  2,'ITA'  :  2,'MAL'  :  10,'GRE'  :  6,'CYP'  :  10,'BUL'  :  5,'ROU'  :  4,'CRO'  :  9,'SVN'  :  8, }
    const Waste_municipal = {'AUT'  :  8,'HUN'  :  2,'SVK'  :  4,'CZE'  :  6,'POL'  :  2,'LIT'  :  4,'LAT'  :  5,'EST'  :  2,'FIN'  :  8,'SWE'  :  3,'DAN'  :  10,'GER'  :  9,'LUX'  :  10,'HOL'  :  7,'BEL'  :  2,'IRL'  :  9,'FRA'  :  7,'POR'  :  6,'ESP'  :  4,'ITA'  :  6,'MAL'  :  10,'GRE'  :  7,'CYP'  :  9,'BUL'  :  2,'ROU'  :  1,'CRO'  :  3,'SVN'  :  5, }
    const Water = {'AUT'  :  5,'HUN'  :  7,'SVK'  :  2,'CZE'  :  3,'POL'  :  5,'LIT'  :  2,'LAT'  :  2,'EST'  :  10,'FIN'  :  5,'SWE'  :  4,'DAN'  :  4,'GER'  :  6,'LUX'  :  1,'HOL'  :  8,'BEL'  :  7,'IRL'  :  3,'FRA'  :  7,'POR'  :  9,'ESP'  :  9,'ITA'  :  5,'MAL'  :  2,'GRE'  :  10,'CYP'  :  5,'BUL'  :  10,'ROU'  :  6,'CRO'  :  4,'SVN'  :  8, }
    const Water_stress = {'AUT'  :  4,'HUN'  :  4,'SVK'  :  2,'CZE'  :  7,'POL'  :  9,'LIT'  :  2,'LAT'  :  1,'EST'  :  6,'FIN'  :  5,'SWE'  :  2,'DAN'  :  6,'GER'  :  9,'LUX'  :  3,'HOL'  :  5,'BEL'  :  10,'IRL'  :  2,'FRA'  :  7,'POR'  :  6,'ESP'  :  10,'ITA'  :  8,'MAL'  :  10,'GRE'  :  7,'CYP'  :  8,'BUL'  :  9,'ROU'  :  4,'CRO'  :  2,'SVN'  :  3, }
    const averageSel1 = "average : 5";
    const averageSel2 = "scale 1 to 10";
    const Agri_jobAvg = "12%"
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
      newIndic = Select ;
    }
    else if (indicator== 'Active'){	newIndic =Active; averageSel1=averageSel1, averageSel2=averageSel2	}
    else if (indicator== 'Agri_job'){	newIndic =Agri_job;	}
    else if (indicator== 'Air_passenger'){	newIndic =Air_passenger;	}
    else if (indicator== 'Alcohol_liter'){	newIndic =Alcohol_liter;	}
    else if (indicator== 'All_Debts'){	newIndic =All_Debts;	}
    else if (indicator== 'Artists'){	newIndic =Artists;	}
    else if (indicator== 'Baby_Boomer'){	newIndic =Baby_Boomer;	}
    else if (indicator== 'Beach_house'){	newIndic =Beach_house;	}
    else if (indicator== 'Biocapacity'){	newIndic =Biocapacity;	}
    else if (indicator== 'Birth'){	newIndic =Birth;	}
    else if (indicator== 'Business_job'){	newIndic =Business_job;	}
    else if (indicator== 'Business_number'){	newIndic =Business_number;	}
    else if (indicator== 'CO2'){	newIndic =CO2;	}
    else if (indicator== 'CO2_agri'){	newIndic =CO2_agri;	}
    else if (indicator== 'CO2_electricity'){	newIndic =CO2_electricity;	}
    else if (indicator== 'CO2_transport'){	newIndic =CO2_transport;	}
    else if (indicator== 'Cancer'){	newIndic =Cancer;	}
    else if (indicator== 'Centenary'){	newIndic =Centenary;	}
    else if (indicator== 'Child'){	newIndic =Child;	}
    else if (indicator== 'Climate_change_death'){	newIndic =Climate_change_death;	}
    else if (indicator== 'Cloth_Price_Index'){	newIndic =Cloth_Price_Index;	}
    else if (indicator== 'Coastal_line'){	newIndic =Coastal_line;	}
    else if (indicator== 'Consumption'){	newIndic =Consumption;	}
    else if (indicator== 'Crimes'){	newIndic =Crimes;	}
    else if (indicator== 'Debt_household'){	newIndic =Debt_household;	}
    else if (indicator== 'Doctor'){	newIndic =Doctor;	}
    else if (indicator== 'Drug_use'){	newIndic =Drug_use;	}
    else if (indicator== 'Education_Price_Index'){	newIndic =Education_Price_Index;	}
    else if (indicator== 'Electricity_renewable'){	newIndic =Electricity_renewable;	}
    else if (indicator== 'Electricity_use'){	newIndic =Electricity_use;	}
    else if (indicator== 'Energy_Price_Index'){	newIndic =Energy_Price_Index;	}
    else if (indicator== 'Family_size'){	newIndic =Family_size;	}
    else if (indicator== 'Female'){	newIndic =Female;	}
    else if (indicator== 'Female_Retirement_age'){	newIndic =Female_Retirement_age;	}
    else if (indicator== 'Footprint'){	newIndic =Footprint;	}
    else if (indicator== 'GDP'){	newIndic =GDP;	}
    else if (indicator== 'Gini'){	newIndic =Gini;	}
    else if (indicator== 'Happy'){	newIndic =Happy;	}
    else if (indicator== 'Healthcare_expenditure'){	newIndic =Healthcare_expenditure;	}
    else if (indicator== 'Homicide'){	newIndic =Homicide;	}
    else if (indicator== 'Hospital_bed'){	newIndic =Hospital_bed;	}
    else if (indicator== 'Hospital_patient'){	newIndic =Hospital_patient;	}
    else if (indicator== 'House_room'){	newIndic =House_room;	}
    else if (indicator== 'Inactive'){	newIndic =Inactive;	}
    else if (indicator== 'Job'){	newIndic =Job;	}
    else if (indicator== 'Job_travel'){	newIndic =Job_travel;	}
    else if (indicator== 'Jobless'){	newIndic =Jobless;	}
    else if (indicator== 'LGBT_acceptance'){	newIndic =LGBT_acceptance;	}
    else if (indicator== 'Labor_cost_annual'){	newIndic =Labor_cost_annual;	}
    else if (indicator== 'Land'){	newIndic =Land;	}
    else if (indicator== 'Land_polluted'){	newIndic =Land_polluted;	}
    else if (indicator== 'Land_protected'){	newIndic =Land_protected;	}
    else if (indicator== 'Life_expectancy'){	newIndic =Life_expectancy;	}
    else if (indicator== 'Malboro_Price'){	newIndic =Malboro_Price;	}
    else if (indicator== 'Male_Retirement_age'){	newIndic =Male_Retirement_age;	}
    else if (indicator== 'Manufacturing_job'){	newIndic =Manufacturing_job;	}
    else if (indicator== 'Marriage'){	newIndic =Marriage;	}
    else if (indicator== 'Math_PISA'){	newIndic =Math_PISA;	}
    else if (indicator== 'Median_age'){	newIndic =Median_age;	}
    else if (indicator== 'Nurse'){	newIndic =Nurse;	}
    else if (indicator== 'Obesity'){	newIndic =Obesity;	}
    else if (indicator== 'Pisa'){	newIndic =Pisa;	}
    else if (indicator== 'Police_officers'){	newIndic =Police_officers;	}
    else if (indicator== 'Population'){	newIndic =Population;	}
    else if (indicator== 'Poverty_risk'){	newIndic =Poverty_risk;	}
    else if (indicator== 'Prisoners'){	newIndic =Prisoners;	}
    else if (indicator== 'Railway_length'){	newIndic =Railway_length;	}
    else if (indicator== 'Reading'){	newIndic =Reading;	}
    else if (indicator== 'Reading_books'){	newIndic =Reading_books;	}
    else if (indicator== 'Recycling'){	newIndic =Recycling;	}
    else if (indicator== 'Resting'){	newIndic =Resting;	}
    else if (indicator== 'Retail_number'){	newIndic =Retail_number;	}
    else if (indicator== 'Retired'){	newIndic =Retired;	}
    else if (indicator== 'Road_lenght'){	newIndic =Road_lenght;	}
    else if (indicator== 'Road_passenger'){	newIndic =Road_passenger;	}
    else if (indicator== 'Salary'){	newIndic =Salary;	}
    else if (indicator== 'Salary_gap_gender'){	newIndic =Salary_gap_gender;	}
    else if (indicator== 'Salary_hour'){	newIndic =Salary_hour;	}
    else if (indicator== 'Savings'){	newIndic =Savings;	}
    else if (indicator== 'Science_job'){	newIndic =Science_job;	}
    else if (indicator== 'Smoker'){	newIndic =Smoker;	}
    else if (indicator== 'Sports'){	newIndic =Sports;	}
    else if (indicator== 'Student'){	newIndic =Student;	}
    else if (indicator== 'Student_high_school_cost'){	newIndic =Student_high_school_cost;	}
    else if (indicator== 'Suicide'){	newIndic =Suicide;	}
    else if (indicator== 'Teacher_college'){	newIndic =Teacher_college;	}
    else if (indicator== 'Teacher_high_school'){	newIndic =Teacher_high_school;	}
    else if (indicator== 'Teacher_primary_school'){	newIndic =Teacher_primary_school;	}
    else if (indicator== 'Teacher_university'){	newIndic =Teacher_university;	}
    else if (indicator== 'Tenant'){	newIndic =Tenant;	}
    else if (indicator== 'Tourist'){	newIndic =Tourist;	}
    else if (indicator== 'Urban_Rural'){	newIndic =Urban_Rural;	}
    else if (indicator== 'Vegetables'){	newIndic =Vegetables;	}
    else if (indicator== 'Waste_municipal'){	newIndic =Waste_municipal;	}
    else if (indicator== 'Water'){	newIndic =Water;	}
    else if (indicator== 'Water_stress'){	newIndic =Water_stress;	}


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


  context.font = "30px futura";
  const len_avg2 = context.measureText(averageSel1).width;
  const x_center_avg2 = width/2 - (len_avg2/2);
  context.fillStyle = 'green';
  context.fillText(averageSel1, x_center_avg2, 475, );
  context.shadowBlur = 60;

  const len_avg = context.measureText(averageSel2).width;
  const x_center_avg = width/2 - (len_avg/2);
  context.fillStyle = 'green';
  context.font = "30px futura";
  context.fillText(averageSel2, x_center_avg,525, );
  context.shadowBlur = 60;




    };
  };

const createPane = () => {
  const pane = new Tweakpane.Pane(); //create a new slider pane
  let folder;

  folder = pane.addFolder({ title : "The_Helicopter view of Europe"});
  folder.addInput(params, "Indicator", { options : { Select : "Europe",Active : 'Active' ,
  Agri_job : 'Agri_job' ,
  Air_passenger : 'Air_passenger' ,
  Alcohol_liter : 'Alcohol_liter' ,
  All_Debts : 'All_Debts' ,
  Artists : 'Artists' ,
  Baby_Boomer : 'Baby_Boomer' ,
  Beach_house : 'Beach_house' ,
  Biocapacity : 'Biocapacity' ,
  Birth : 'Birth' ,
  Business_job : 'Business_job' ,
  Business_number : 'Business_number' ,
  CO2 : 'CO2' ,
  CO2_agri : 'CO2_agri' ,
  CO2_electricity : 'CO2_electricity' ,
  CO2_transport : 'CO2_transport' ,
  Cancer : 'Cancer' ,
  Centenary : 'Centenary' ,
  Child : 'Child' ,
  Climate_change_death : 'Climate_change_death' ,
  Cloth_Price_Index : 'Cloth_Price_Index' ,
  Coastal_line : 'Coastal_line' ,
  Consumption : 'Consumption' ,
  Crimes : 'Crimes' ,
  Debt_household : 'Debt_household' ,
  Doctor : 'Doctor' ,
  Drug_use : 'Drug_use' ,
  Education_Price_Index : 'Education_Price_Index' ,
  Electricity_renewable : 'Electricity_renewable' ,
  Electricity_use : 'Electricity_use' ,
  Energy_Price_Index : 'Energy_Price_Index' ,
  Family_size : 'Family_size' ,
  Female : 'Female' ,
  Female_Retirement_age : 'Female_Retirement_age' ,
  Footprint : 'Footprint' ,
  GDP : 'GDP' ,
  Gini : 'Gini' ,
  Happy : 'Happy' ,
  Healthcare_expenditure : 'Healthcare_expenditure' ,
  Homicide : 'Homicide' ,
  Hospital_bed : 'Hospital_bed' ,
  Hospital_patient : 'Hospital_patient' ,
  House_room : 'House_room' ,
  Inactive : 'Inactive' ,
  Job : 'Job' ,
  Job_travel : 'Job_travel' ,
  Jobless : 'Jobless' ,
  LGBT_acceptance : 'LGBT_acceptance' ,
  Labor_cost_annual : 'Labor_cost_annual' ,
  Land : 'Land' ,
  Land_polluted : 'Land_polluted' ,
  Land_protected : 'Land_protected' ,
  Life_expectancy : 'Life_expectancy' ,
  Malboro_Price : 'Malboro_Price' ,
  Male_Retirement_age : 'Male_Retirement_age' ,
  Manufacturing_job : 'Manufacturing_job' ,
  Marriage : 'Marriage' ,
  Math_PISA : 'Math_PISA' ,
  Median_age : 'Median_age' ,
  Nurse : 'Nurse' ,
  Obesity : 'Obesity' ,
  Pisa : 'Pisa' ,
  Police_officers : 'Police_officers' ,
  Population : 'Population' ,
  Poverty_risk : 'Poverty_risk' ,
  Prisoners : 'Prisoners' ,
  Railway_length : 'Railway_length' ,
  Reading : 'Reading' ,
  Reading_books : 'Reading_books' ,
  Recycling : 'Recycling' ,
  Resting : 'Resting' ,
  Retail_number : 'Retail_number' ,
  Retired : 'Retired' ,
  Road_lenght : 'Road_lenght' ,
  Road_passenger : 'Road_passenger' ,
  Salary : 'Salary' ,
  Salary_gap_gender : 'Salary_gap_gender' ,
  Salary_hour : 'Salary_hour' ,
  Savings : 'Savings' ,
  Science_job : 'Science_job' ,
  Smoker : 'Smoker' ,
  Sports : 'Sports' ,
  Student : 'Student' ,
  Student_high_school_cost : 'Student_high_school_cost' ,
  Suicide : 'Suicide' ,
  Teacher_college : 'Teacher_college' ,
  Teacher_high_school : 'Teacher_high_school' ,
  Teacher_primary_school : 'Teacher_primary_school' ,
  Teacher_university : 'Teacher_university' ,
  Tenant : 'Tenant' ,
  Tourist : 'Tourist' ,
  Urban_Rural : 'Urban_Rural' ,
  Vegetables : 'Vegetables' ,
  Waste_municipal : 'Waste_municipal' ,
  Water : 'Water' ,
  Water_stress : 'Water_stress'}});
};

createPane();

canvasSketch(sketch, settings);
