function titleCaseEdit(title) {
    var words=title.split(' ');
    var Cap=[];
    words.forEach(element=>{ Cap.push(element[0].toUpperCase()+element.slice(1,element.length));
    })
    return Cap.join(' ');
  }
  console.log(titleCaseEdit("the Road not taken") )
 