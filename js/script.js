let doc = document
let content = doc.querySelector('.content')
let form = doc.forms.forma
let text1 = form.elements.text
let btn = form.elements.btn


let bloc;
let h1;
let p;
let div;
let div1;
let span1;
let span2;
let span3;
let boxElem;
for (let i of btn) {

    i.onclick = (event) => {


        if (i.dataset.btn == 'add') {
            let text = text1.value
            event.preventDefault();
            bloc = doc.createElement('div')
            content.append(bloc)////////////////////////////////
            div = doc.createElement('div')
            h1 = doc.createElement('h1')
            h1.innerHTML = text
            p = doc.createElement('p')
            div.append(h1)
            div.append(p)
            bloc.append(div)/////////////////////////////////////////////////////
            div1 = doc.createElement('div')
            span1 = doc.createElement('span')
            span1.innerHTML = 'close'
            span1.classList.add('material-icons')
            span2 = doc.createElement('span')
            span2.innerHTML = 'content_copy'
            span2.classList.add('material-icons')
            
            div1.append(span1)
            div1.append(span2)
            
            bloc.append(div1)/////////////////////////////////////
            bloc.classList.add('contBloc')
            boxElem = content.childNodes
            console.log(boxElem);
            for (let item of boxElem) {
                item.id = 0
                span2.onclick = (e) => {
                    let blocCopiy = e.target.parentNode.parentNode
                    bloc = blocCopiy.cloneNode(true);
                    content.append(bloc)
                    

                }
                span1.onclick = (e) => {
                    let blocDelite = e.target.parentNode.parentNode
                    // console.log(id);
                    content.removeChild(blocDelite)
                }
                
            }


        } else if (i.dataset.btn == 'delite') {
            location.reload()
            event.preventDefault();
            content.remove(bloc)
        }
    }

}