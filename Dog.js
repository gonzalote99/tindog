class Dog{
  constructor(data) {
    Object.assign(this, data);
  }

  setMatchStatus(choice) {
    this.hasBeenLiked = choice;
    this.hasBeenSwiped = false;
  }

  getHTML() {
    return `
    <img src=${this.avatar} alt=${this.bio} />
    <div class="dog bio">
     <div class="profile">
       <h2>${this.name}, ${this.age} </h2>
       <p>${this.bio}</p>
     </div>
    </div>
    `;
  }


  showStatus() {
    return this.getHTML() + `
    <div class="dog status">
     <div class="status-tag">
       <img src=${this.hasBeenLiked? "https://raw.githubusercontent.com/devngc/tindog/master/images/icons/like-image.png" : "https://raw.githubusercontent.com/devngc/tindog/master/images/icons/nope-image.png"}>
     </div>
    </div>
    `;
  }

}

export default Dog;