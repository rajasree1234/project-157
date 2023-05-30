AFRAME.registerComponent("comics-posters", {
    init: function () {
      this.postersContainer = this.el;
      this.createCards()
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "avengers",
          title: "Avengers",
          url: "./assets/thumbnails/avengers.jpg",
        },
        {
          id: "marvelzombies",
          title: "MarvelZombies",
          url: "./assets/thumbnails/marvelzombies.png",
        },
  
        {
          id: "venom",
          title: "Venom",
          url: "./assets/thumbnails/venom.jpeg",
        },
        {
          id: "xmen",
          title: "Xmen",
          url: "./assets/thumbnails/xmen.jpeg",
        },
      ];

      let prevoiusXPosition = -60;

      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;

        const borderel=this.createBorder(position,item.id)
        const poster=this.createPoster(item)
        borderel.appendChild(poster)
        const titleel=this.createTitleEl(position,item) 
      
        borderel.appendChild(titleel)
            // Thumbnail Element
           
            // Title Text Element
            
            this.postersContainer.appendChild(borderel);
      }
    },
  
    createPoster:function(item){
      const entityel=document.createElement("a-entity")
      entityel.setAttribute("visible",true);
      entityel.setAttribute("geometry",{
        primitive:"plane",
        width:20,
        height:28});
      entityel.setAttribute("position",{x:0,y:5,z:0.1});
      entityel.setAttribute("material",{src:item.url})
      return(entityel)
    },
  
    createBorder:function(position,id){
        const entityel=document.createElement("a-entity")
        entityel.setAttribute("id",id)
        entityel.setAttribute("visible",true)
        entityel.setAttribute("geometry",{
        primitive:"box",
        width:10,
        height:80});
        entityel.setAttribute("position",position)
        entityel.setAttribute("material",{color:"#0077cc",opacity:1})
        return(entityel)
      },
    
    createTitleEl:function(position,item){
      const entityel=document.createElement("a-entity")
      entityel.setAttribute("text",{font:"exo2bold",
      align:"center",
      width:70,
      color:"#e65100",
      value:item.title});
      const elposition=position
      elposition.y=-20
      entityel.setAttribute("visible",true)
      entityel.setAttribute("position",elposition)
      return(entityel)
    }
    
  });
  