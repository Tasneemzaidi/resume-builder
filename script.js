$(document).ready(function(){
    $('.repeater').repeater({
        initEmpty: false,
        defaultValues: {
            'text-input'3:''
        },
        show:function(){
            $(this).slideDown();
        },
        hide:function(deleteElement){
            $(this).slideUp(deleteElement);
            setTimeout(() => {
                // generateCV()
            },500);


        },
        isFurstItemUndeletable: true
    })
})