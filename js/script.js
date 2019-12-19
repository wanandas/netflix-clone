const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// Select tab content item
function selectItem(e) {
  removeBorder();
  removeShow();
  // Add border to curent tab
  this.classList.add("tab-border");
  // Grab content item from DOM

  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add("show");
}

const removeBorder = () => {
  tabItems.forEach(item => item.classList.remove("tab-border"));
};

// Listen for tab click
tabItems.forEach(item => item.addEventListener("click", selectItem));

const removeShow = () => {
  tabContentItems.forEach(item => item.classList.remove("show"));
};
