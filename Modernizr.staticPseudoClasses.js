// Make sure the document.body element exists.
(function(){
    Modernizr.addTest('staticPseudoClasses', function() {
        var dummy = document.createElement("div"),
            child = document.createElement("div"),
            dynamicChild = document.createElement("div"),
            staticPseudoClasses, before, after, end;
        
        if(child.classList)
            child.classList.add('static-pseudo-classes-test');
        else
            child.className += " static-pseudo-classes-test";
            
        dummy.appendChild(child);
        document.body.appendChild(dummy);
        
        dummy.appendChild(dynamicChild);  
        after = window.getComputedStyle(child, null).display;
        dummy.removeChild(dynamicChild);
        end = window.getComputedStyle(child, null).display;
        
        staticPseudoClasses = after === end;
        document.body.removeChild(dummy);
          
        return staticPseudoClasses === true;  
    });
}());
