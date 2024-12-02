import React from 'react'
import FestiveCard from './FestiveCard'

function Festives() {

    let festives=[
        {
            monthName:"ଜାନୁଆରୀ",
            monthDates:
        {
            date1:"ତା ୧",
            date2:"ତା ୫",
            date3:"ତା ୯",
            date4:"ତା ୧୦",
            date5:"ତା ୧୨",
            date6:"ତା ୧୩",
            date7:"ତା ୧୪",
            date8:"ତା ୧୫ ",
            date9:"ତା ୨୩ ",
            date10:"ତା ୨୫ ",
            date11:"ତା ୨୬ ",
            date12:"ତା ୨୭ ",
            date13:"ତା ୨୮ ",
            date14:"ତା ୨୯ ",
            date15:"ତା ୩୦ ",
            
        },
            monthFestives:
        {
            festive1:"ଇଂରାଜୀ ନୂତନ ବର୍ଷ ସନ ୨୦୨୫ ମସିହା ପ୍ରବେଶ ଆରମ୍ଭ , ଦ୍ୱିତୀୟାର ଚନ୍ଦ୍ର ଦର୍ଶନ, ଶରଣ ଆରମ୍ଭ",
            festive2:"ଶରଣ ଶେଷ",
            festive3:"ଶାମ୍ବ ଦଶମୀ ଓ ସୁଦଶା ବ୍ରତ",
            festive4:"ପୁତ୍ରଦା ଏକାଦଶୀ ଉପବାସ ଓ ହ.ନି",
            festive5:"ସ୍ୱାମୀ ବିବେକାନନ୍ଦ ଜୟନ୍ତୀ, ଶିବ ଚତୁର୍ଦ୍ଦଶୀ ଉପବାସ ଓ ବେଢା ପରିକ୍ରମା",
            festive6:"ପୋୖଷ ପୂର୍ଣ୍ଣିମା, ଚନ୍ଦ୍ର ପୂଜା, ମହୋଦଧି ଆରତୀ, ନବାଙ୍କ ବେଢା, ମାସାନ୍ତ",
            festive7:"ଉତ୍ତରାୟଣ ମକର ସଂକ୍ରାନ୍ତି, ପୋଙ୍ଗଲ, ମାଘବ୍ରତାରମ୍ଭ ଓ ହ.ନି",
            festive8:"ପୁଷ୍ୟା ଭିଷେକ ଓ ରାଜା ଭିଷେକ",
            festive9:"ନେତାଜୀ ସୁବାଷ ଚନ୍ଦ୍ର ବୋଷଙ୍କ ଜୟନ୍ତୀ",
            festive10:"ଷଟ୍ ତିଳା ଏକାଦଶୀ ଉପବାସ, ଓଳାଶୁଣି ମେଳା, ହଳ ନିଷେଧ",
            festive11:"ସାଧାରଣତନ୍ତ୍ର ଦିବସ",
            festive12:"ରଟନ୍ତି କାଳୀକା ପୂଜା",
            festive13:"ଶିବ ଚତୁର୍ଦ୍ଦଶୀ ଉପବାସ ଓ ବେଢା ପରିକ୍ରମା, ରଟନ୍ତି ଚତୁର୍ଦ୍ଦଶୀ, ଚନ୍ଦ୍ର କ୍ଷୟ, ନିଶି ପାଳନ, ଶରଣ ଆରମ୍ଭ, ସବେ ମେରାଜ୍ (ପୂର୍ବରାତ୍ରି)",
            festive14:"ତ୍ରିବେଣୀ ଅମାବାସ୍ୟା, ମା ବିରଜା ଦେବୀଙ୍କର ଜନ୍ମୋତ୍ସବ, ହଳ ନିଷେଧ",
            festive15:"ଦ୍ଵିତୀୟାର ଚନ୍ଦ୍ର ଦର୍ଶନ ପୂଜା ଓ ଉପବାସ, ମହାତ୍ମାଗାନ୍ଧୀଙ୍କ ତିରୋଧାନ ଦିବସ",
            
        },
           monthFestiveImp:
           {
            imp1:"ଇଂରାଜୀ ନୁତନ ବର୍ଷ ଆରମ୍ଭ",
            imp2:"ଆପଣଙ୍କ ମତାମତ",
            imp3:"ଆପଣଙ୍କ ମତାମତ ",
            imp5:" ଆପଣଙ୍କ ମତାମତ",
            imp6:"",
            imp7:"",
            imp8:"",
            imp9:"",
            imp10:"",
            imp11:"",
            imp12:"",
            imp13:"",
            imp14:"",
            imp15:"",
            imp16:"",
            imp17:"",
            
        }
        },
        {
            monthName:"ଫେବୃଆରୀ",
            monthDates:
        {
            date1:"ତା ୧",
            date2:"ତା ୨",
            date3:"ତା ୪",
            date4:"ତା ୫",
            date5:"ତା ୮",
            date6:"ତା ୯",
            date7:"ତା ୧୦",
            date8:"ତା ୧୧",
            date9:"ତା ୧୪",
            date10:"ତା ୧୨",
            date11:"ତା ୧୪",
            date12:"ତା ୨୪",
            date13:"ତା ୨୬",
            date14:"ତା ୨୭",
            date15:"ତା ୨୮",
        },
            monthFestives:
        {
            festive1:"ବରଦା ଚତୁର୍ଥୀ ଓ ଶରଣ ଶେଷ",
            festive2:"ଶ୍ରୀ ପଞ୍ଚମୀ ଓ ସରସ୍ଵତୀ ପୂଜା",
            festive3:"ମାଘ ସପ୍ତମୀ, (କୋଣାର୍କ) ଚନ୍ଦ୍ରଭାଗା ତୀର୍ଥେ ସ୍ନାନ, ଗୋବର୍ଦ୍ଧନ ପୀଠ ଗାରୋଇ ଆଶ୍ରମରେ ଶ୍ରୀମନ୍ଦିରର ଜନ୍ମ ଉତ୍ସବ, ମାଛଗାଁ, ଜଗତସିଂହପୁର",
            festive4:"ଭୀଷ୍ମାଷ୍ଟମୀ",
            festive5:"ଭୈମୀ ଏକାଦଶୀ (ବଡ଼) ଉପବାସ, ବ୍ୟାସ ସରୋବର ମେଳା,  ହଳ ନିଷେଧ",
            festive6:"ବରାହ ଦ୍ଵାଦଶୀ",
            festive7:"ନିତ୍ୟାନନ୍ଦ ମହାପ୍ରଭୁଙ୍କ ଜନ୍ମୋତ୍ସବ",
            festive8:"ଜୋରନ୍ଦା ମେଳା",
            festive9:"କୁମ୍ଭ ସଂକ୍ରାନ୍ତି, ମାଘ ପୂର୍ଣ୍ଣିମା, ଅଗ୍ନି ଉତ୍ସବ, ମାଘ ବ୍ରତ ସମାପନ ଓ ହଳ ନିଷେଧ",
            festive10:"ସବେ-ବରାତ୍ (ପୂର୍ବରାତ୍ରି)",
            festive11:"ପଙ୍କୋଦ୍ଧାର ଏକାଦଶୀ , ଶରଣ ଆରମ୍ଭ ଓ ହଳ ନିଷେଧ",
            festive12:"ମହାଶିବରାତ୍ରୀ ଓ ଜାଗର",
            festive13:"ଚନ୍ଦ୍ରକ୍ଷୟ, ନିଶିପାଳନ, ହଳ ନିଷେଧ",
            festive14:"ଅମାବାସ୍ୟା",
            
        },
           monthFestiveImp:
           {
            imp1:"",
            imp2:"",
            imp3:"",
            imp4:"",
            imp5:"",
            imp6:"",
            imp7:"",
            imp8:"",
            imp9:"",
            imp10:"",
            imp11:"",
            imp12:"",
            imp13:"",
            imp14:"",
            imp15:"",
            imp16:"",
            imp17:"",
            imp18:"",
            imp19:"",
            imp20:"",

        }
        },
        {
            monthName:"ମାର୍ଚ୍ଚ",
            monthDates:
        {
            date1:"ତା ୬",
            date2:"ତା ୭",
            date3:"ତା ୮",
            date4:"ତା ୯",
            date5:"ତା ୧୦",
            date6:"ତା ୧୧",
            date7:"ତା ୧୨",
            date8:"ତା ୧୪",
            date9:"ତା ୧୯",
            date10:"ତା ୨୦",
            date11:"ତା ୨୧",
            date12:"ତା ୨୨",
            date13:"ତା ୨୩",
            date14:"ତା ୨୪",
            date15:"ତା ୨୫",
            date16:"ତା ୨୬",
            date17:"ତା ୨୯",
            date18:"ତା ୩୦",
            date19:"ତା ୩୧",
            

        },
            monthFestives:
        {
            festive1:"ସ୍ମାର୍ତ୍ତ ସମ୍ମତ ପଙ୍କୋଦ୍ଧାର ଏକାଦଶୀ ଉପବାସ, ଶରଣ ଆରମ୍ଭ ଓ ହ. ନି.,",
            festive2:"ସର୍ବ ବୈଷ୍ଣବ ସମ୍ମତ ଏକାଦଶୀ",
            festive3:"ମହାଶିବ ରତ୍ରି (ଜାଗର) ଓ ଶିବଚତୁର୍ଦ୍ଦଶୀ ଉପବାସ",
            festive4:"ବୈଷ୍ଣବ ସମ୍ମତ ମହାଶିବ ରାତ୍ରି, ଚନ୍ଦ୍ରକ୍ଷୟ, ନିଶିପାଳନ ଓ ହଳ ନିଷେଧ",
            festive5:"ଅମାବାସ୍ଯା, ସୂର୍ୟ୍ଯମହତୀ ସ୍ନାନ ଓ ଶରଣ ଶେଷ",
            festive6:"ଦ୍ୱିତୀୟାର ଚନ୍ଦ୍ରଦର୍ଶନ ପୂଜା ଓ ଉପବାସ",
            festive7:"ରମଜାନ ମାସ ଆରମ୍ଭ",
            festive8:"ମୀନ ସଂକ୍ରାନ୍ତି ଓ ଗୁରୁ ପଞ୍ଚମୀ ବ୍ରତ ଓ ହଳ ନିଷେଧ",
            festive9:"ଦୋଳ ଯାତ୍ରାରମ୍ଭଃ, ଫଗୁ ଦଶମୀ ଓ ଶ୍ରୀ ଜୀଉଙ୍କର ଚାଚେରୀ ବେଶ",
            festive10:"ପାପନାଶିନୀ (ଆମଦର୍କୀ) ଏକାଦଶୀ ଓ ହଳ ନିଷେଧ",
            festive11:"ସାମାନ୍ଯ ଗୋବିନ୍ଦ ଦ୍ବାଦଶୀ ସ୍ନାନ ଓ ସମ ଦିବସ",
            festive12:"ରାଷ୍ଟ୍ରିୟ ୧୯୪୬ ନବବର୍ଷ ଆରମ୍ଭ",
            festive13:"ଶିବଚତୁର୍ଦ୍ଦଶୀ ଉପବାସ ଓ ବେଢା",
            festive14:"ବରାହ ଦୋଳ, ରାଜାଗ୍ନି, ଓଳକଣା ମେଲଣ ଓ ପୂର୍ଣ୍ଣିମାର ଚନ୍ଦ୍ରପୂଜା",
            festive15:"ଦୋଳ ପୂର୍ଣ୍ଣିମା, ଶ୍ରୀ ଚୈତନ୍ୟ ଦେବଙ୍କର ଜନ୍ମୋତ୍ସବ ଓ ଶ୍ରୀ ଜୀଉଙ୍କର ରାଜ ବେଶ",
            festive16:"ହୋଲି ଉତ୍ସବ",
            festive17:"ଗୁଡ ଫ୍ରାଇଡ଼େ",
            festive18:"ପଞ୍ଚୁଦୋଳ",
            festive19:"ସ୍କନ୍ଧ ଷଷ୍ଠୀ",
            festive20:"",

        },
           monthFestiveImp:
           {
            imp1:"its a holiday",
            imp2:"",
            imp3:"",
            imp4:"",
            imp5:"",
            imp6:"",
            imp7:"",
            imp8:"",
            imp9:"",
            imp10:"",
            imp11:"",
            imp12:"",
            imp13:"",
            imp14:"",
            imp15:"",
            imp16:"",
            imp17:"",
            imp18:"",
            imp19:"",
            imp20:"",

        }
        },
        {
            monthName:"ଅପ୍ରେଲ",
            monthDates:
        {
            date1:"ତା ୧",
            date2:"ତା ୨",
            date3:"ତା ୪",
            date4:"ତା ୫",
            date5:"ତା ୬",
            date6:"ତା ୭",
            date7:"ତା ୮",
            date8:"ତା ୯",
            date9:"ତା ୧୦",
            date10:"ତା ୧୧",
            date11:"ତା ୧୨",
            date12:"ତା ୧୩",
            date13:"ତା ୧୪",
            date14:"ତା ୧୫",
            date15:"ତା ୧୬",
            date16:"ତା ୧୭",
            date17:"ତା ୧୮",
            date18:"ତା ୧୯",
            date19:"ତା ୨୧",
            date20:"ତା ୨୨",
            date21:"ତା ୨୩",
            date22:"ତା ୨୪",
            date23:"ତା ୨୮",
            date24:"ତା ୩୦",
        },
            monthFestives:
        {
            festive1:"ଉତ୍କଳ ଦିବସ ଓ ଇଷ୍ଟର ମନ୍ ଡେ",
            festive2:"ତାରାତାରେଣୀ ଯାତ୍ରା ଓ ଶରଣ ଆରମ୍ଭ",
            festive3:"ଦଶ ଦୋଳ",
            festive4:"ପାପମୋଚନୀ ଏକାଦଶୀ, ଜୁମାତୁଲା ୱିଦା ଓ ହଳ ନିଷେଧ",
            festive5:"ମହାମହତୀ ବଋଣୀ ସ୍ନାନ",
            festive6:"ସ୍ମୁହୀ ଚତୁର୍ଦ୍ଦଶୀ, ସବେ-କଦର୍ (ପୂର୍ବରାତ୍ରି), ଶିବଚତୁର୍ଦ୍ଦଶୀ ଉପବାସ ଓ ବେଢା ପରିକ୍ରମା ଓ ଶରଣ ଶେଷ",
            festive7:"ମଧୁ ଅମାବାସ୍ଯା, ଚନ୍ଦ୍ରକ୍ଷୟ ଓ ନିଶିପାଳନ",
            festive8:"ସୃଷ୍ଟ୍ୟାରମ୍ଭ ଦିବସ, ତେଲୁଗୁ ନୂତନ ବର୍ଷ, ଶ୍ରୀ ବାସନ୍ତୀକ ଦୁର୍ଗାଦେବ୍ୟାଃ ନବଦିନାତ୍ମକ ପୂଜାରମ୍ଭଃ ଓ ସମ୍ବତ୍ ୨୦୮୧ ପ୍ରବେଶ",
            festive9:"ଚନ୍ଦ୍ରଦର୍ଶନ",
            festive10:"ଇଦୁଲ୍ ଫିତର",
            festive11:"ଶ୍ରୀମନ୍ଦିରେ ବାଡ଼ି ନୃସିଂହ ବିଜେ",
            festive12:"ବାସନ୍ତୀକ ଶ୍ରୀ ଦୁର୍ଗାଦେବ୍ୟାଃ ବିଲ୍ୱବରଣ ଓ ବର୍ଷ ଶେଷ",
            festive13:"ମହାବିଷୁବ (ପଣା) ସଂକ୍ରାନ୍ତି,ରାଧାରମଣ ଦେବ ଓ ହନୁମାନ ଦେବଙ୍କ ଜୟନ୍ତୀ, ପୀଠେ ବାସନ୍ତୀକ ଶ୍ରୀ ଦୁର୍ଗାଦେବ୍ୟାଃ ସପ୍ତମୀ  ପୂଜା ଓ ଶ୍ରୀମନ୍ଦିରେ ଚୈତ୍ର ପର୍ବ ଗୁଣ୍ଡିଚା ଯାତ୍ରା",
            festive14:"ଶ୍ରୀ ଶ୍ରୀ ଲିଙ୍ଗରାଜ ଦେବଙ୍କ ରଥ ପ୍ରତିଷ୍ଠା ଓ ବାସନ୍ତୀକ ଶ୍ରୀଦୁର୍ଗାଦେବ୍ୟାଃ ମହାଷ୍ଟମୀ ପୂଜା",
            festive15:"ଅଶୋକାଷ୍ଟମୀ, ଶ୍ରୀ ଲିଙ୍ଗରାଜ ଦେବଙ୍କ ରୁକୁଣା ରଥଯାତ୍ରା ଓ ବାସନ୍ତୀକ ଶ୍ରୀ ଦୁର୍ଗାଦେବ୍ୟାଃ ମହାନବମୀ ପୂଜା",
            festive16:"ଶ୍ରୀରାମ ନବମୀ ଓ ଶ୍ରୀ ଦୁର୍ଗାଦେବ୍ୟାଃ ବିଶ୍ରାମ",
            festive17:"ବାସନ୍ତୀକ ଦଶହରା ଓ ସୁଦଶା ବ୍ରତ",
            festive18:"କାମଦା ଏକାଦଶୀ ଉପବାସ ଓ ହ.ନି.",
            festive19:"ଅନଙ୍ଗ ତ୍ରୟୋଦଶୀ",
            festive20:"ଶିବ ଓ ବିଷ୍ଣୁ ଦମନକ ଚତୁର୍ଦ୍ଦଶୀ",
            festive21:"ଚୈତ୍ର ପୂର୍ଣ୍ଣିମା, ଚନ୍ଦ୍ରପୂଜା ଓ ହିଙ୍ଗୁଳା ଯାତ୍ରା",
            festive22:"ବୈଶାଖ ବ୍ରତାରମ୍ଭଃ",
            festive23:"ମଧୁବାବୁଙ୍କ ଜୟନ୍ତୀ",
            festive24:"ଶରଣ ଆରମ୍ଭ",
        },
           monthFestiveImp:
           {
            imp1:"its a holiday",
            imp2:"",
            imp3:"",
            imp4:"",
            imp5:"",
            imp6:"",
            imp7:"",
            imp8:"",
            imp9:"",
            imp10:"",
            imp11:"",
            imp12:"",
            imp13:"",
            imp14:"",
            imp15:"",
            imp16:"",
            imp17:"",
            imp18:"",
            imp19:"",
            imp20:"",

        }
        },
        {
            monthName:"ମଇ",
            monthDates:
        {
            date1:"ତା ୧",
            date2:"ତା ୪",
            date3:"ତା ୬",
            date4:"ତା ୭",
            date5:"ତା ୮",
            date6:"ତା ୯",
            date7:"ତା ୧୦",
            date8:"ତା ୧୨",
            date9:"ତା ୧୩",
            date10:"ତା ୧୪",
            date11:"ତା ୧୫",
            date12:"ତା ୧୬",
            date13:"ତା ୧୯",
            date14:"ତା ୨୨",
            date15:"ତା ୨୩",
            date16:"ତା ୨୭",
            date17:"ତା ୨୯",
            date18:"ତା ୩୦",
            date19:"ତା ୩୧",
            date20:"",
        },
            monthFestives:
        {
            festive1:"ଶ୍ରମିକ ଦିବସ",
            festive2:"ବରୁଥିନୀ ଏକାଦଶୀ ଉପବାସ,ଶରଣ ଶେଷ ଓ ହଳ ନିଷେଧ",
            festive3:"ଶିବଚତୁର୍ଦ୍ଦଶୀ ଉପବାସ ଓ ବେଢା",
            festive4:"ଚନ୍ଦ୍ର‌କ୍ଷୟ, ନିଶିପାଳନ ଓ ହ.ନି.",
            festive5:"ଋକ୍ମିଣୀ ଅମାବାସ୍ୟା",
            festive6:"ପର୍ଶୁରାମ ଜୟନ୍ତୀ ଓ ଚନ୍ଦ୍ରଦର୍ଶନ",
            festive7:"ଅକ୍ଷୟ ତୃତୀୟା, ଚନ୍ଦନ ଯାତ୍ରା ଆରମ୍ଭ ଓ ରଥ ଅନୁକୂଳ",
            festive8:"ଜଗଦ୍ ଗୁରୁ ଆଦି ଶଙ୍କରାଚାର୍ଯ୍ୟଙ୍କ ଜୟନ୍ତୀ",
            festive9:"ରାମାନୁଜାଚାର୍ଯ୍ୟଙ୍କ ଜୟନ୍ତୀ",
            festive10:"ବୃଷ ସଂକ୍ରାନ୍ତି ଓ ହଳ ନିଷେଧ",
            festive11:"ନିଳାଦ୍ରୀ ମହୋଦୟାଷ୍ଟମୀ",
            festive12:"ସୀତା ନବମୀ",
            festive13:"ମୋହିନୀ ଏକାଦଶୀ ଉପବାସ, ରବିନାରାୟଣ ବ୍ରତ ଓ ହ.ନି.",
            festive14:"ନୃସିଂହ ଜନ୍ମ ଓ ଶିବଚତୁର୍ଦ୍ଦଶୀ ଉପବାସ",
            festive15:"ଚନ୍ଦନ ପୂର୍ଣ୍ଣିମା, ଚନ୍ଦ୍ରପୂଜା,ବୁଦ୍ଧ ଜୟନ୍ତୀ, ବୈଶାଖ ବ୍ରତ ସମାପନ ଓ ମହାବିଷ୍ଣୁ ଯଜ୍ଞର ପୂର୍ଣ୍ଣାହୁତି",
            festive16:"ଶରଣ ଆରମ୍ଭ",
            festive17:"ଶ୍ରୀକ୍ଷେତ୍ରେ ଭଉଁରୀ",
            festive18:"ଉତ୍କଳେ ଭଉଁରୀ ଓ ଶ୍ରୀକ୍ଷେତ୍ରେ ହଳଦୀ ପାଣି",
            festive19:"ଶରଣ ଶେଷ",
            festive20:"",
            festive21:"",
            festive22:"",
            festive23:"",
            festive24:"",
            festive25:"",
            festive26:"",
            festive27:"",
        },
           monthFestiveImp:
           {
            imp1:"its a holiday",
            imp2:"",
            imp3:"",
            imp4:"",
            imp5:"",
            imp6:"",
            imp7:"",
            imp8:"",
            imp9:"",
            imp10:"",
            imp11:"",
            imp12:"",
            imp13:"",
            imp14:"",
            imp15:"",
            imp16:"",
            imp17:"",
            imp18:"",
            imp19:"",
            imp20:"",

        }
        },
        {
            monthName:"ଜୁନ",
            monthDates:
        {
            date1:"ତା ୨",
            date2:"ତା ୫",
            date3:"ତା ୬",
            date4:"ତା ୭",
            date5:"ତା ୯",
            date6:"ତା ୧୦",
            date7:"ତା ୧୧",
            date8:"ତା ୧୨",
            date9:"ତା ୧୪",
            date10:"ତା ୧୫",
            date11:"ତା ୧୬",
            date12:"ତା ୧୭",
            date13:"ତା ୧୮",
            date14:"ତା ୧୯",
            date15:"ତା ୨୦",
            date16:"ତା ୨୧",
            date17:"ତା ୨୨",
            date18:"ତା ୨୩",
            date19:"ତା ୨୬",
            date20:"ତା ୨୮",
        },
            monthFestives:
        {
            festive1:"ଜଳକ୍ରୀଡା ଏକାଦଶୀ ଉପବାସ ଓ ହଳ ନିଷେଧ",
            festive2:"ଚନ୍ଦ୍ରକ୍ଷୟ, ନିଶିପାଳନ, ଶିବଚତୁର୍ଦ୍ଦଶୀ ଉପବାସ ଓ ହ.ନି.",
            festive3:"ଅମାବାସ୍ୟା ଓ ସାବିତ୍ରୀ ବ୍ରତ",
            festive4:"ଚନ୍ଦ୍ରଦର୍ଶନ",
            festive5:"ରମ୍ଭା ତୃତୀୟା",
            festive6:"ଉମା ଚତୁର୍ଥୀ",
            festive7:"ଶିବ ବିବାହୋତ୍ସବ",
            festive8:"ସର୍ବତ୍ର ଶୀତଳ ଷଷ୍ଠୀ ଓ ଶ୍ରୀମନ୍ଦିରେ ଜଳକ୍ରୀଡା",
            festive9:"ପ୍ରଥମ ରଜ",
            festive10:"ମିଥୁନ (ରଜ) ସଂକ୍ରାନ୍ତି ଓ ହଳ ନିଷେଧ",
            festive11:"ଗଙ୍ଗା ଦଶହରା ଓ ଭୂଦାହ",
            festive12:"ବସୁମତୀ ସ୍ନାନ ଓ ଇଦୁଜ୍ଜୁହା",
            festive13:"ନିର୍ଜ୍ଜଳା ଏକାଦଶୀ ଉପବାସ ଓ ହଳ ନିଷେଧ",
            festive14:"ଚମ୍ପକ ଦ୍ଵାଦଶୀ",
            festive15:"ଶିବଚତୁର୍ଦ୍ଦଶୀ ଉପବାସ",
            festive16:"ଚନ୍ଦ୍ରପୂଜା",
            festive17:"ଦେବସ୍ନାନ ପୂର୍ଣ୍ଣିମା",
            festive18:"ମହାବୀର ଜୟନ୍ତୀ ଓ ଶରଣ ଆରମ୍ଭ",
            festive19:"ଅଣସର ପଞ୍ଚମୀ",
            festive20:"ଶରଣ ଶେଷ",
            festive21:"",
            festive22:"",
            festive23:"",
            festive24:"",
            festive25:"",
            festive26:"",
            festive27:"",
        },
           monthFestiveImp:
           {
            imp1:"its a holiday",
            imp2:"",
            imp3:"",
            imp4:"",
            imp5:"",
            imp6:"",
            imp7:"",
            imp8:"",
            imp9:"",
            imp10:"",
            imp11:"",
            imp12:"",
            imp13:"",
            imp14:"",
            imp15:"",
            imp16:"",
            imp17:"",
            imp18:"",
            imp19:"",
            imp20:"",

        }
        },
        {
            monthName:"ଜୁଲାଇ",
            monthDates:
        {
            date1:"ତା ୧",
            date2:"ତା ୨",
            date3:"ତା ୩",
            date4:"ତା ୪ ",
            date5:"ତା ୫ ",
            date6:"ତା ୬",
            date7:"ତା ୭",
            date8:"ତା ୮",
            date9:"ତା ୯",
            date10:"ତା ୧୧ ",
            date11:"ତା ୧୪",
            date12:"ତା ୧୫",
            date13:"ତା ୧୬",
            date14:"ତା ୧୭",
            date15:"ତା ୧୮",
            date16:"ତା ୧୯",
            date17:"ତା ୨୦",
            date18:"ତା ୨୧",
            date19:"ତା ୨୨",
            date20:"ତା ୨୫",
            date21:"ତା ୩୧"
        },
            monthFestives:
        {
            festive1:"ଅନବସର ଦଶମୀ",
            festive2:"ଖଳିଲାଗି ଏକାଦଶୀ ଉପବାସ, ପଠାଣି ସାମନ୍ତଙ୍କ ତିରୋଧାନ ଦିବସ ଓ ହ.ନି.",
            festive3:"ଅଣସର ଦ୍ୱାଦଶୀ",
            festive4:"ଅଣସର ତ୍ରୟୋଦଶୀ ଓ ଶିବ ଚତୁର୍ଦ୍ଦଶୀ ଉପବାସ",
            festive5:"ଅମାବାସ୍ୟା, ନଷ୍ଟ ଚନ୍ଦ୍ରୋପବାସ ଓ ଉତ୍କଳ ମଣି ଗୋପବନ୍ଧୁଙ୍କ ଶ୍ରାଦ୍ଧ",
            festive6:"ନେତ୍ରୋତ୍ସବ ଓ ନବଯୌବନ ଦର୍ଶନ",
            festive7:"ଶ୍ରୀଗୁଣ୍ଡିଚା ରଥଯାତ୍ରା ଓ ଚନ୍ଦ୍ର ଦର୍ଶନ",
            festive8:"ହିଜିରି ୧୪୪୬ ସାଲ ଆରମ୍ଭ",
            festive9:"ବିପତ୍ତାରିଣୀ ବ୍ରତ",
            festive10:"ହେରା ପଞ୍ଚମୀ ଓ ଗୁରୁ ପଞ୍ଚମୀ ବ୍ରତ",
            festive11:"ପର୍ଶୁରାମାଷ୍ଟମୀ ଓ ନବମୀର ସନ୍ଧ୍ୟା ଦର୍ଶନ",
            festive12:"ବାହୁଡା଼ ରଥଯାତ୍ରା",
            festive13:"ଦକ୍ଷିଣାୟନ କର୍କଟ ସଂକ୍ରାନ୍ତି, ରଥ ଉପରେ ସୁନାବେଶ ଓ ହ.ନି.",
            festive14:"ହରିଶୟନ (ବଡ଼) ଏକାଦଶୀ ଉପବାସ, ମହରମ ପର୍ବ ଓ ହ.ନି.",
            festive15:"ଗରୁଡ ଶୟନୋତ୍ସବ",
            festive16:"ଶ୍ରୀ ଜୀଉଙ୍କ ନିଳାଦ୍ରୀ ବିଜେ ଓ ଶିବ ଚତୁର୍ଦ୍ଦଶୀ ଉପବାସ",
            festive17:"ଚନ୍ଦ୍ରପୂଜା",
            festive18:"ବ୍ୟାସ ପୂର୍ଣ୍ଣିମା ଓ ଶରଣ ଆରମ୍ଭ",
            festive19:"ଶ୍ରାବଣ ବ୍ରତାରମ୍ଭଃ ଓ ବୋଲବମ୍ ଆରମ୍ଭ",
            festive20:"ମନସା ପଞ୍ଚମୀ ଓ ଶରଣ ଶେଷ",
            festive21:"କାମଦା ଏକାଦଶୀ ଉପବାସ ଓ ହ.ନି.",
            festive22:"",
            festive23:"",
            festive24:"",
            festive25:"",
            festive26:"",
            festive27:"",
        },
           monthFestiveImp:
           {
            imp1:"its a holiday",
            imp2:"",
            imp3:"",
            imp4:"",
            imp5:"",
            imp6:"",
            imp7:"",
            imp8:"",
            imp9:"",
            imp10:"",
            imp11:"",
            imp12:"",
            imp13:"",
            imp14:"",
            imp15:"",
            imp16:"",
            imp17:"",
            imp18:"",
            imp19:"",
            imp20:"",

        }
        },
        {
            monthName:"ଅଗଷ୍ଟ",
            monthDates:
        {
            date1:"ତା ୨",
            date2:"ତା ୩",
            date3:"ତା ୪",
            date4:"ତା ୬",
            date5:"ତା ୯",
            date6:"ତା ୧୪",
            date7:"ତା ୧୫",
            date8:"ତା ୧୬",
            date9:"ତା ୧୭",
            date10:"ତା ୧୮",
            date11:"ତା ୧୯",
            date12:"ତା ୨୦",
            date13:"ତା ୨୧",
            date14:"ତା ୨୨",
            date15:"ତା ୨୩",
            date16:"ତା ୨୪",
            date17:"ତା ୨୫",
            date18:"ତା ୨୬",
            date19:"ତା ୨୭",
            date20:"ତା ୨୯",
        },
            monthFestives:
        {
            festive1:"ଶିବ ଚତୁର୍ଦ୍ଦଶୀ ଉପବାସ",
            festive2:"ଗୃହିଣାଂ ଚିତାଉ ଲାଗି, ଚନ୍ଦ୍ରକ୍ଷୟ, ନିଶିପାଳନ ଓ ହଳ ନିଷେଧ",
            festive3:"ଚିତାଉ ଅମାବାସ୍ୟା, ଶ୍ରୀମନ୍ଦିରେ ଚିତାଲାଗି, ସୂର୍ଯ୍ୟମହତୀ ସ୍ନାନ",
            festive4:"ଚନ୍ଦ୍ରଦର୍ଶନ",
            festive5:"ଜାଗ୍ରଦଗୈାରୀ ପଞ୍ଚମୀ",
            festive6:"ଶ୍ରୀକ୍ଷେତ୍ରେ ଝୁଲଣ ଯାତ୍ରାର ଆରମ୍ଭ",
            festive7:"୭୮ତମ ସ୍ବାଧିନତା ଦିବସ ଓ ସୁଦଶା ବ୍ରତ",
            festive8:"ସିଂହ ସଂକ୍ରାନ୍ତି, ପବିତ୍ରାଧିବାସ, ପୁତ୍ରଦା ଏକାଦଶୀ ଉପବାସ ଓ ହଳ ନିଷେଧ",
            festive9:"ବିଷ୍ଣୁ ପବିତ୍ରାରୋପଣ, ଆଖେଟକ ପର୍ବ ଓ ଶରଣ ଆରମ୍ଭ",
            festive10:"ଶିବ ପବିତ୍ରାରୋପଣ ଓ ଶିବ ଚତୁର୍ଦ୍ଦଶୀ",
            festive11:"ଗହ୍ମାପର୍ବ , ବଳଭଦ୍ର ଜନ୍ମ, ରାକ୍ଷୀବାନ୍ଧନ, ପୂର୍ଣ୍ଣିମା ଓ ଚନ୍ଦ୍ରପୂଜା",
            festive12:"ଶ୍ରୀକ୍ଷେତ୍ରେ ଶ୍ରୀମନ୍ଦିରେ ଝୁଲଣ ଯାତ୍ରା ଶେଷ",
            festive13:"ବୁଧିବାମନ ଓଷା ଓ ଶରଣ ଶେଷ",
            festive14:"ଅଙ୍ଗଭେଟ ତୃତୀୟା",
            festive15:"ଗୃହିଣାଂ ରକ୍ଷା ପଞ୍ଚମୀ",
            festive16:"ଶ୍ରୀମନ୍ଦିରେ ରେଖା ପଞ୍ଚମୀ",
            festive17:"ଖୁଦୁରୁକୁଣୀ ଓଷା ଆରମ୍ଭ",
            festive18:"ଶ୍ରୀକୃଷ୍ଣ ଜନ୍ମାଷ୍ଟମୀ ଓ ପିଠେ ଦାସ ଶ୍ରୀ ଶ୍ରୀ ଆଦିତ୍ୟ ନାରାୟଣ ଦାସଙ୍କର ଜନ୍ମୋତ୍ସବ",
            festive19:"ନନ୍ଦୋତ୍ସବ",
            festive20:"କାଳୀୟଦଳନ ଏକାଦଶୀ ଉପବାସ ଓ ହ.ନି.",
            festive21:"",
            festive22:"",
            festive23:"",
            festive24:"",
            festive25:"",
            festive26:"",
            festive27:"",
        },
           monthFestiveImp:
           {
            imp1:"its a holiday",
            imp2:"",
            imp3:"",
            imp4:"",
            imp5:"",
            imp6:"",
            imp7:"",
            imp8:"",
            imp9:"",
            imp10:"",
            imp11:"",
            imp12:"",
            imp13:"",
            imp14:"",
            imp15:"",
            imp16:"",
            imp17:"",
            imp18:"",
            imp19:"",
            imp20:"",

        }
        },
        {
            monthName:"ସେପ୍ଟେମ୍ବର",
            monthDates:
        {
            date1:"ତା ୧",
            date2:"ତା ୨",
            date3:"ତା ୪",
            date4:"ତା ୫",
            date5:"ତା ୬",
            date6:"ତା ୭",
            date7:"ତା ୮",
            date8:"ତା ୯",
            date9:"ତା ୧୦",
            date10:"ତା ୧୧",
            date11:"ତା ୧୨",
            date12:"ତା ୧୪ ",
            date13:"ତା ୧୫ ",
            date14:"ତା ୧୬ ",
            date15:"ତା ୧୭ ",
            date16:"ତା ୧୮ ",
            date17:"ତା ୨୨ ",
            date18:"ତା ୨୩ ",
            date19:"ତା ୨୪ ",
            date20:"ତା ୨୮ ",
        },
            monthFestives:
        {
            festive1:"ଶିବ ଚତୁର୍ଦ୍ଦଶୀ ଉପବାସ",
            festive2:"ସପ୍ତପୁରୀ ଅମାବାସ୍ୟା, ଚନ୍ଦ୍ରକ୍ଷୟ ଓ ହଳ ନିଷେଧ",
            festive3:"ଚନ୍ଦ୍ରଦର୍ଶନ ଓ ପୂଜା",
            festive4:"ଗୁରୁ ଦିବସ ଓ ସର୍ବପଲ୍ଲୀ ରାଧାକ୍ରିଷ୍ଣନଙ୍କ ଜନ୍ମ ଦିବସ",
            festive5:"ବାଲି ତୃତୀୟା, ଗୈାରୀ ବ୍ରତ ଓ ହରିତାଳିକା ଚତୁର୍ଥୀ",
            festive6:"ଶ୍ରୀ ଗଣେଶ ଚତୁର୍ଥୀ ବ୍ରତ",
            festive7:"ନୂଆଖାଇ ଓ ଋଷି ପଞ୍ଚମୀ",
            festive8:"ଷଷ୍ଠୀ ଓଷା ଓ ସୋମନାଥ ବ୍ରତାରମ୍ଭଃ",
            festive9:"ଲଳିତା ସପ୍ତମୀ ଓ କୁକକୁଟୀ ବ୍ରତ",
            festive10:"ଶ୍ରୀ ରାଧାଷ୍ଟମୀ,  ଦୂର୍ବାଷ୍ଟମୀ ଓ ଶ୍ରୀଦୁର୍ଗାଶୟନୋତ୍ସବ",
            festive11:"ତାଳ ନବମୀ ଓ ଠାକୁର ଅନୁକୂଳ ଚନ୍ଦ୍ରଙ୍କ ଜୟନ୍ତୀ",
            festive12:"ଶ୍ରୀ ହରି ପାର୍ଶ୍ଵପରିବର୍ତ୍ତନ (ବଡ) ଏକାଦଶୀ, ଶରଣ ଆରମ୍ଭ ଓ ହଳ ନିଷେଧ",
            festive13:"ସୁନିଆଁ, ଅ୬୮ଙ୍କ ବାମନ ଜନ୍ମ ଓ ୧୪୩୨ ସାଲ ପ୍ରବେଶ",
            festive14:"ମହାପୁରୁଷ ମହମ୍ମଦଙ୍କ ଜନ୍ମ ଦିବସ, କନ୍ୟା ସଂକ୍ରାନ୍ତି, ବିଶ୍ଵକର୍ମା ପୂଜା, ଅଘୋର ଚତୁର୍ଦ୍ଦଶୀ ଓ ହଳ ନିଷେଧ",
            festive15:"ଅନନ୍ତ ବ୍ରତ ଓ ଚନ୍ଦ୍ରପୂଜା",
            festive16:"ପୂର୍ଣ୍ଣିମା, ଭାଗବତ ଜନ୍ମ, ଇନ୍ଦ୍ରୋଉତ୍ସବ, ଅପରପକ୍ଷାରମ୍ଭ ଓ ଶରଣ ଶେଷ",
            festive17:"ଅଶ୍ଵ ପଞ୍ଚମୀ",
            festive18:"ଗଜଷଷ୍ଠୀ",
            festive19:"ଦେବ୍ୟୁତଥାପନ , ମୂଳାଷ୍ଟମୀ, ସହସ୍ର କୁମ୍ଭାଭିଷେକ, ଦ୍ବିତୀବାହନ ଓଷା ଓ ଷୋଡ଼ଶଦିନାତ୍ମକ ପୂଜାରମ୍ଭ",
            festive20:"ସର୍ବସମ୍ମତ ଈନ୍ଦିରା ଏକାଦଶୀ ଓ ହ.ନି.",
            festive21:"",
            festive22:"",
            festive23:"",
            festive24:"",
            festive25:"",
            festive26:"",
            festive27:"",
        },
           monthFestiveImp:
           {
            imp1:"its a holiday",
            imp2:"",
            imp3:"",
            imp4:"",
            imp5:"",
            imp6:"",
            imp7:"",
            imp8:"",
            imp9:"",
            imp10:"",
            imp11:"",
            imp12:"",
            imp13:"",
            imp14:"",
            imp15:"",
            imp16:"",
            imp17:"",
            imp18:"",
            imp19:"",
            imp20:"",

        }
        },
        {
            monthName:"ଅକ୍ଟୋବର",
            monthDates:
        {
            date1:"ତା ୧",
            date2:"ତା ୨",
            date3:"ତା ୩",
            date4:"ତା ୪",
            date5:"ତା ୭",
            date6:"ତା ୯",
            date7:"ତା ୧୦",
            date8:"ତା ୧୧",
            date9:"ତା ୧୨",
            date10:"ତା ୧୩",
            date11:"ତା ୧୪",
            date12:"ତା ୧୫",
            date13:"ତା ୧୬",
            date14:"ତା ୧୭",
            date15:"ତା ୧୮",
            date16:"ତା ୨୮",
            date17:"ତା ୩୦",
            date18:"ତା ୩୧",
            
        },
            monthFestives:
        {
            festive1:"ଶିବଚତୁର୍ଦ୍ଦଶୀ ଉପବାସ",
            festive2:"ମହାଳୟା ଅମାବାସ୍ୟା, ଗାନ୍ଧୀ ଓ ଶାସ୍ତ୍ରୀଙ୍କ ଜୟନ୍ତୀ, ଫୁଲ୍ଲେରୀ ଓଷା, ଚନ୍ଦ୍ରକ୍ଷୟ ଓ ହଳ ନିଷେଧ",
            festive3:"ଶ୍ରୀଦୁର୍ଗାଦେବ୍ୟାଃ, ନବଦିନାତ୍ମକ ପୂଜାରମ୍ଭଃ ଓ ମା' ବିରଜାଦେବୀଙ୍କ ରଥଯାତ୍ରା",
            festive4:"ଚନ୍ଦ୍ରଦର୍ଶନ ଓ ପୂଜା",
            festive5:"ନତଃ ପଞ୍ଚମୀ ଓ ବିରଜାଦେବୀଙ୍କ ପଞ୍ଚମୀ ହୋମ",
            festive6:"ପୀଠେ ଶ୍ରୀଦୁର୍ଗାଦେବ୍ୟାଃ ତ୍ରିଦିନାତ୍ମକ ସପ୍ତମୀ ପୂଜା,ତପଃ ଷଷ୍ଠୀ ଓ ବିଲ୍ୱଧିବାସ",
            festive7:"ପୀଠେ ଶ୍ରୀଦୁର୍ଗାଦେବ୍ୟାଃ ମହାଷ୍ଟମୀ, ମୃଣ୍ମୟୀ ଦେବୀଙ୍କ ସପ୍ତମୀ ପୂଜା",
            festive8:"ପୀଠେ ମହାନବମୀ, ମୃଣ୍ମୟୀ ଦେବୀଙ୍କ ମହାଅଷ୍ଟମୀ ପୂଜା,ସନ୍ଧି ପୂଜା ଓ ଶରଣ ଆରମ୍ଭ",
            festive9:"ପୀଠେ ଦଶହରା, ବିଜୟା ଦଶମୀ, ଦଶହରା ଉତ୍ସବ, ସୋମନାଥ ବ୍ରତ ସମାପନ ଓ ମୃଣ୍ମୟୀ ଦେବୀଙ୍କ ମହାନବମୀ ପୂଜା",
            festive10:"ମୃଣ୍ମୟୀ ଦେବୀଙ୍କ ଦଶହରା",
            festive11:"ଭସାଣି ଯାତ୍ରା ଓ ପାପାଙ୍କୁଶା ଏକାଦଶୀ ଉପବାସ ଓ ହଳ ନିଷେଧ",
            festive12:"ଶରଣ ଶେଷ ଓ ଗ୍ୟାରୁଁହିଁ ସରିଫ୍",
            festive13:"ଗଜଲକ୍ଷ୍ମୀ ପୂଜା, କୁମାର ଉତ୍ସବ ଓ ଶିବଚତୁର୍ଦ୍ଦଶୀ ଉପବାସ",
            festive14:"ପୂର୍ଣ୍ଣିମା, ତୁଳା (ଗର୍ଭଣା) ସଂକ୍ରାନ୍ତି ଓ ହଳ ନିଷେଧ",
            festive15:"କାର୍ତ୍ତିକ ବ୍ରତାରମ୍ଭଃ, ପଣ୍ଡିତ ପରୀକ୍ଷିତ ଓ ବିଷ୍ଣୁ ପ୍ରସାଦ ଖଡୀରତ୍ନଙ୍କ ଶ୍ରାଦ୍ଧୋତ୍ସବ",
            festive16:"ରମା ଏକାଦଶୀ ଉପବାସ,ଗୋବତ୍ସା ଦ୍ଵାଦଶୀ ଓ ହଳ ନିଷେଧ",
            festive17:"ଧନ୍ୱନ୍ତରୀ ଜୟନ୍ତୀ ଓ ନରକ ଚତୁର୍ଦ୍ଦଶୀ",
            festive18:"ଦୀପାବଳୀ, ଶ୍ୟାମାକାଳୀ ପୂଜା, ଚନ୍ଦ୍ରକ୍ଷୟ ଓ ହଳ ନିଷେଧ",
           
        },
           monthFestiveImp:
           {
            imp1:"its a holiday",
            imp2:"",
            imp3:"",
            imp4:"",
            imp5:"",
            imp6:"",
            imp7:"",
            imp8:"",
            imp9:"",
            imp10:"",
            imp11:"",
            imp12:"",
            imp13:"",
            imp14:"",
            imp15:"",
            imp16:"",
            imp17:"",
            imp18:"",
            imp19:"",
            imp20:"",

        }
        },
        {
            monthName:"ନଭେମ୍ୱର",
            monthDates:
        {
            date1:"ତା ୧",
            date2:"ତା ୨",
            date3:"ତା ୩",
            date4:"ତା ୫",
            date5:"ତା ୭",
            date6:"ତା ୮",
            date7:"ତା ୯",
            date8:"ତା ୧୦",
            date9:"ତା ୧୧",
            date10:"ତା ୧୨",
            date11:"ତା ୧୩",
            date12:"ତା ୧୪",
            date13:"ତା ୧୫",
            date14:"ତା ୧୬",
            date15:"ତା ୨୦",
            date16:"ତା ୨୧",
            date17:"ତା ୨୩",
            date18:"ତା ୨୪",
            date19:"ତା ୨୬",
            date20:"ତା ୨୮",
            data21:"ତା ୨୯",
            data22:"ତା ୩୦"

        },
            monthFestives:
        {
            festive1:"କାର୍ତ୍ତିକ ଅମାବାସ୍ୟା ଓ ପୟାଶ୍ରାଦ୍ଧ",
            festive2:"ଗୋବର୍ଦ୍ଧନ ପୂଜା",
            festive3:"ଭାତୃ ଦ୍ବିତୀୟା ଓ ଚନ୍ଦ୍ରଦର୍ଶନ",
            festive4:"ନାଗ ଚତୁର୍ଥୀ ବ୍ରତ",
            festive5:"ଶରଣ ଆରମ୍ଭ",
            festive6:"ଷୋଳଶାସନ ଅମୃତ ମଣୋହି ଭୋଗ",
            festive7:"ଗୋଷ୍ଠାଷ୍ଟମୀ",
            festive8:"ଅଁଳା ନବମୀ, ଶ୍ରୀ ରାଧାଙ୍କ ପାଦ ଦର୍ଶନ ଓ ଜଗଦ୍ଧାତ୍ରୀ ପୂଜା",
            festive9:"ଶରଦ୍ରାସାଧିବାସ",
            festive10:"ଦେବୋତ୍ ଥାପନ (ବଡ଼) ଏକାଦଶୀ, ଭୀଷ୍ମ ପଞ୍ଚକ ବ୍ରତ,ଶରଣ ଶେଷ ଓ ହଳ ନିଷେଧ",
            festive11:"ଗରୁଡ଼ ଦ୍ୱାଦଶୀ ଓ ତୁଳସୀ ବିବାହ",
            festive12:"ବଡ଼ଓଷା,ଶିବୋତ୍ଥାପନ, ବୈକୁଣ୍ଠ ଚତୁର୍ଦ୍ଦଶୀ, ଶିଶୁ ଦିବସ (ନେହେରୁଙ୍କ ଜୟନ୍ତୀ)",
            festive13:"ରାସ ପୂର୍ଣ୍ଣିମା, ବାଲିଯାତ୍ରା, କାର୍ତ୍ତିକେଶ୍ୱର ପୂଜା, କାର୍ତ୍ତିକ ବ୍ରତ ସମାପନ, ଚନ୍ଦ୍ରପୂଜା ଓ କେଦାର ବ୍ରତ",
            festive14:"ବିଛା ସଂକ୍ରାନ୍ତି, ଛାଡଖାଇ ଓ ହ.ନି",
            festive15:"ସୀତା ବିବାହ ଓ ଶ୍ରୀକ୍ଷେତ୍ର ପରିକ୍ରମା",
            festive16:"ମାର୍ଗଶୀର ଗୁରୁବାର ଓଷା",
            festive17:"ପ୍ରଥମାଷ୍ଟମୀ",
            festive18:"କାଞ୍ଜିଅଁଳା ନବମୀ",
            festive19:"ଉତ୍ପନ୍ନା ଏକାଦଶୀ ଉପବାସ ଓ ହ.ନି",
            festive20:"ମାଣବସା ଗୁରୁବାର ଓଷା",
            festive21:"ଶିବଚତୁର୍ଦ୍ଦଶୀ ଉପବାସ",
            festive22:"ଦେବଦୀପାବଳୀ ଆରମ୍ଭ, ଚନ୍ଦ୍ରକ୍ଷୟ ଓ ହଳ ନିଷେଧ",
            festive23:"",
            festive24:"",
            festive25:"",
            festive26:"",
            festive27:"",
        },
           monthFestiveImp:
           {
            imp1:"its a holiday",
            imp2:"",
            imp3:"",
            imp4:"",
            imp5:"",
            imp6:"",
            imp7:"",
            imp8:"",
            imp9:"",
            imp10:"",
            imp11:"",
            imp12:"",
            imp13:"",
            imp14:"",
            imp15:"",
            imp16:"",
            imp17:"",
            imp18:"",
            imp19:"",
            imp20:"",

        }
        },
        {
            monthName:"ଡିସେମ୍ବର",
            monthDates:
        {
            date1:"ତା ୧",
            date2:"ତା ୨",
            date3:"ତା ୪",
            date4:"ତା ୫",
            date5:"ତା ୬",
            date6:"ତା ୭",
            date7:"ତା ୯",
            date8:"ତା ୧୧",
            date9:"ତା ୧୨",
            date10:"ତା ୧୩",
            date11:"ତା ୧୪",
            date12:"ତା ୧୫",
            date13:"ତା ୧୬",
            date14:"ତା ୧୭",
            date15:"ତା ୨୩",
            date16:"ତା ୨୫",
            date17:"ତା ୨୬",
            date18:"ତା ୨୯",
            date19:"ତା ୩୦",
            
        },
            monthFestives:
        {
            festive1:"ମହୋଦଧି ଅମାବାସ୍ୟା,ମଧ୍ୟ ଦେବଦୀପାବଳୀ ଓ ସୂର୍ଯ୍ୟମହତୀ ସ୍ନାନ",
            festive2:"ଦେବଦୀପାବଳୀ ସମାପ୍ତି ଓ ଚନ୍ଦ୍ରଦର୍ଶନ",
            festive3:"ରମ୍ଭା ତୃତୀୟା",
            festive4:"ମାଣବସା ଗୁରୁବାର ଓଷା ଓ ଶରଣ ଆରମ୍ଭ",
            festive5:"କୁରାଳ ପଞ୍ଚମୀ",
            festive6:"ଓଢଣ ଓ ପ୍ରାବରଣ ଷଷ୍ଠୀ",
            festive7:"ଶରଣ ଶେଷ",
            festive8:"ମୋକ୍ଷଦା ଏକାଦଶୀ ଓ ହଳ ନିଷେଧ",
            festive9:"ବ୍ୟଞ୍ଜନ ଦ୍ଵାଦଶୀ",
            festive10:"ଅନଙ୍ଗ ତ୍ରୟୋଦଶୀ ଓ ଗୀତା ଜୟନ୍ତୀ",
            festive11:"ପଣ୍ଡୁ ଓଷା, ଚନ୍ଦ୍ରପୂଜା ଓ ଶିବଚତୁର୍ଦ୍ଦଶୀ ଉପବାସ",
            festive12:"ପୂର୍ଣ୍ଣିମା",
            festive13:"ଧନୁ ସଂକ୍ରାନ୍ତି, ପହିଲି ଭୋଗ ଓ ହଳ ନିଷେଧ",
            festive14:"ଦାଣ୍ଡ ପହଁରା ଓ ବାଟ ଓଷା",
            festive15:"ପଠାଣି ସାମନ୍ତଙ୍କ ଜୟନ୍ତୀ",
            festive16:"ଯୀଶୁ ଖ୍ରୀଷ୍ଟଙ୍କ ଜନ୍ମ (ବଡ଼ ଦିନ)",
            festive17:"ସଫଳ ଏକାଦଶୀ ଓ ହଳ ନିଷେଧ",
            festive18:"ଶିବଚତୁର୍ଦ୍ଦଶୀ ଓ ଉପବାସ",
            festive19:"ବକୁଳ ଅମାବାସ୍ୟା, ଶ୍ରୀମନ୍ଦିରେ ଓ ଗୃହିଣାଂ ବକୁଳ ଲାଗି,ସୋମମହତୀ ସ୍ନାନ ଓ ଚନ୍ଦ୍ରକ୍ଷୟ",
            
        },
           monthFestiveImp:
           {
            imp1:"its a holiday",
            imp2:"",
            imp3:"",
            imp4:"",
            imp5:"",
            imp6:"",
            imp7:"",
            imp8:"",
            imp9:"",
            imp10:"",
            imp11:"",
            imp12:"",
            imp13:"",
            imp14:"",
            imp15:"",
            imp16:"",
            imp17:"",
            imp18:"",
            imp19:"",
            imp20:"",

        }
        },
        
   
    ]
    return(
    <>
    <h1 className=" h-14 pt-4 text-white text-center text-2xl  bg-[url('https://www.shutterstock.com/image-vector/indian-tribal-painting-warli-260nw-2429804279.jpg')]   ">ପର୍ବପର୍ବାଣୀ ଓ ଛୁଟିଦିନ</h1>
    
    <div className=' w-full  lg:grid lg:grid-cols-3 lg:gap-4 lg:p-6 '>
       {
        festives.map((data)=>{
            return <FestiveCard data={data}/>
        })
       }
    </div>

    </>
  )
}

export default Festives