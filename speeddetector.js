function claculateDemeritPoint(sp){
    if(sp<70){
        console.log('OK');
    }
    else{
        demeritPoint =Math.floor((speed -70) /5);
        console.log("Point:" + demeritPoint);
        let demeritPoint =0;
     if( demeritPoint > 12){
            console.log("lincense suspended")
        }
    }
}
claculateDemeritPoint(69)