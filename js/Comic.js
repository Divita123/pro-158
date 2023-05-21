AFRAME.registerComponent("comic", {
    init: function () {
      this.comicsContainer = this.el;   
      this.createCards();
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "avengers",
          title: "Avengers",
          url: "./assets/thumbnails/a_img.jpg",
        },
        {
          id: "avengers2",
          title: "Avengers-2",
          url: "./assets/thumbnails/a2_img.jpg",
        },
  
        {
          id: "iron-man",
          title: "Iron-Man",
          url: "./assets/thumbnails/i_img.jpg",
        },
        {
          id: "spider-man",
          title: "Spider-Man",
          url: "./assets/thumbnails/s_img.jpg",
        },
      ];
   

      
      let prevoiusXPosition = -82;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 33;
        const posY = 0;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl = this.createBorder(position, item.id);
  
        // Thumbnail Element
        const thumbNail = this.createThumbNail(item);
        borderEl.appendChild(thumbNail);
  
        // Title Text Element
        const titleEl = this.createTitleEl(position, item);
        borderEl.appendChild(titleEl);
  
        this.comicsContainer.appendChild(borderEl);
      }
    },
    createBorder: function (position, id) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("id", id);
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 32,
        height: 42,
      });
      entityEl.setAttribute("position", position);
      entityEl.setAttribute("material", {
        color: "black",
        opacity: 1,
      });

      entityEl.setAttribute("cursor-listener", {});

  
      return entityEl;
    },
    createThumbNail: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "box",
        width: 30,
        height:40,
        breadth: 100,
      });
      entityEl.setAttribute("material", { src: item.url });
  
      return entityEl;
    },
    createTitleEl: function (position, item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("text", {
        font: "exo2bold",
        align: "center",
        width: 100,
        color: "#white",
        value: item.title,
      });
      const elPosition = position;
      elPosition.y = -50;
      entityEl.setAttribute("position", elPosition);
      entityEl.setAttribute("visible", true);
      return entityEl;
    },
  });
  