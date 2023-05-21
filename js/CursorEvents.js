AFRAME.registerComponent("cursor-listener", {
  schema: {
    selectedItemId: { default: "", type: "string" },
  },
  init: function () {
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents()
  },

  handleComicsListState: function () {
    const id = this.el.getAttribute("id");
    const comicsId = ["avengers", "avengers2", "iron-man", "spider-man"];
    if (comicsId.includes(id)) {
      const comicContainer = document.querySelector("#places-container");
      comicContainer.setAttribute("cursor-listener", {
        selectedItemId: id,
      });
      this.el.setAttribute("material", {
        color: "yellow",
        opacity: 1,
      });
    }
  },
  handleMouseEnterEvents: function () {
    // Mouse Enter Events
    this.el.addEventListener("mouseenter", () => {
      this.handleComicsListState();
    });
  },
  handleMouseLeaveEvents: function () {
    // Mouse Leave Events
    this.el.addEventListener("mouseleave",()=>{
      const {selectedItemId} = this.data
      if(selectedItemId){
          const el = document.querySelector(`#${selectedItemId}`)
          const id = el.getAttribute("id")
          if(id == selectedItemId){
              el.setAttribute("material", {
                  color: 'black',
                  opacity:1,
              })
          }
      }
    })
    
  },
});