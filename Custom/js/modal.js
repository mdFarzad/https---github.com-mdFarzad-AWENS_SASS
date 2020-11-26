 $(document).ready(function () {
     $('.carousel').carousel();
     $('.modal').modal();

 });

 function modalTrigger(idName) {
     let header = document.querySelector("#" + idName).innerHTML;
     let para = document.querySelector("#" + idName + "-para").innerHTML;
     let link = document.querySelector("#" + idName + "-link").innerHTML;

     $(".modal-header").html(header);
     $(".modal-para").html(para);

     let btn_grp = '<a href="' + link + '" class="indigo white-text waves-effect waves-white btn-flat">Visit Page</a>' +
         ' <a href="#!" class="modal-close red white-text waves-effect waves-white btn-flat">Exit</a></div>';

     // let image = '<img src="images/our-reach/' + idName + '.png" width="30%">';
     $(".btn-group").html(btn_grp);
     // $(".modal-image").html(image);

 }
