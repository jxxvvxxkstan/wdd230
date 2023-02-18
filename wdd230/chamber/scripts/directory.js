const requestURL = 'data/members.json';
const memberInfo = document.querySelector('.directoryCards');

async function getMemberInfo() {
  let response = await fetch(requestURL);
  if (response.ok) {
    let data = await response.json()
    console.log(data);
    displayMemberInfo(data)
    
  } else {
    throw Error(response.statusText);
  }
}


function displayMemberInfo(data) {
  data.memberinfo.forEach(member => {
    
    let membercards = document.createElement("section");
    membercards.setAttribute("id",member.memberid);
    let cardImage = document.createElement("img")
    let memName = document.createElement("h2"); 


    let cardName  = document.createElement("p");
    let address  = document.createElement("p");
    let contactNumber  = document.createElement("p");
    let webAddress  = document.createElement("a");
    let memberLevel  = document.createElement("p");

    memName.innerHTML = member.membername;


    let memberImgURL = "images/" + member.logo
    cardImage.setAttribute("src", memberImgURL);
    cardImage.setAttribute("alt", `Logo for ${member.membername}`);
    cardImage.setAttribute("loading", "lazy");

    address.innerHTML = member.address;
    address.setAttribute("class","memberaddress");

    contactNumber.innerHTML = `☎️ ${member.contactnumber}`;

    webAddress.textContent = `🌐 ${member.webaddress}`;
    webAddress.setAttribute("href", member.webaddress);
    webAddress.setAttribute("class","webaddress");

    memberLevel.innerHTML = member.membershiplevel;
    memberLevel.setAttribute("class","membershiplevel webaddressmargin");


    membercards.append(cardImage);
    membercards.append(memName);
    membercards.append(cardName);
    membercards.append(address);
    membercards.append(contactNumber);
    membercards.append(webAddress);
    membercards.append(memberLevel)

    memberInfo.append(membercards) // appends everything to the .membercards as declared at the top
  })
}

getMemberInfo();

/* change display data from grid to list and visa versa */

const gridbtn = document.querySelector("#gridbtn");
const listbtn = document.querySelector("#listbtn");
const display = document.querySelector("#directoryCards");



/*put in grid format */
gridbtn.addEventListener("click", () => {
	display.classList.add("directoryCards");
	display.classList.remove("directoryCardsList");
});

/*put in List format */
listbtn.addEventListener("click", () => {
	display.classList.add("directoryCardsList");
	display.classList.remove("directoryCards");
});