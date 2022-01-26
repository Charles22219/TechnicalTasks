function Bem() { 
    this.class_name = ""
    this.block = function (name) { 
        this.class_name = name + this.class_name 
        return this
    },
    this.element = function (name) { 
        this.class_name +=  "__" + name
        return this
    },
    this.modifier = function (name) { 
        this.class_name += "--" + name
        return this
    },
    this.build = function () { 
        if (!(/[a-zA-Z]/).test(this.class_name[0])) {
            console.log("error, block is required");
            this.class_name = ""
            return 
        }
        return this.class_name
    }
}

const bem = new Bem()

bem.block("list").element("item").modifier("active").build();