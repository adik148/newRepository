function entry(name,month,year,time, duration){
  this.name = name;
  this.month = dateTime;
  this.year = year;
  this.time = time;
  this.duration = duration;
};


var calendar = new Array();

var entry1 = new entry("interview at the Portal", "Feb", 2017,15, 90);
calendar.push(entry1);
var entry2 = new entry("Dinner with John", "Feb", 2017,15.30, 50);
var entry3 = new entry("Lunch with Cindy", "Feb", 2018,15, 90);
var entry4 = new entry("Conference", "Feb", 2019,15, 90);
calendar.push(entry2);
calendar.push(entry3);
calendar.push(entry4);


//TASK is not finished

var length = calendar.length;
for(var i = 0 ; i < length; i++){
    for(var j = 0; j < length; j++)
    {
        if(i !== j){
            if(calendar[i].month == calendar[j].month){
                
            }
        }
    }
}