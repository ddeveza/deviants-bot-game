import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const clamp = (val, min = 0, max = 1) => Math.max(min, Math.min(max, val))
export const mod = (n, m) => {
    return ((n % m) + m) % m;
}
export const randomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const formatNumber = (number = 0) => {
    if (number == null) {
        return "NaN";
    } else {
        let newnum = number * 1;
        if (newnum >= 1000000000000) return `${(newnum / 1000000000000).toFixed(2)}T`;
        else if (newnum >= 1000000000) return `${(newnum / 1000000000).toFixed(2)}B`;
        else if (newnum >= 1000000) return `${(newnum / 1000000).toFixed(2)}M`;
        else if (newnum >= 1000) return `${(newnum / 1000).toFixed(2)}K`;
        else return `${newnum.toLocaleString()}`;
    } 
};

export const formatNumberNoTrailing = (number = 0) => {
    if (number == null) {
        return "NaN";
    } else {
        let newnum = number * 1;
        if (newnum >= 1000000000000) return `${(newnum / 1000000000000)}T`;
        else if (newnum >= 1000000000) return `${(newnum / 1000000000)}B`;
        else if (newnum >= 1000000) return `${(newnum / 1000000)}M`;
        else if (newnum >= 1000) return `${(newnum / 1000)}K`;
        else return `${newnum.toLocaleString()}`;
    } 
};

export const formatCoin = (number = 0) => {
    if (!(number == null)) {
        let newnum = number  * 1;
        if (newnum >= 1000000000000) return `${(newnum / 1000000000000).toFixed(2)}T`;
        else if (newnum >= 1000000000) return `${(newnum / 1000000000).toFixed(2)}B`;
        else return `${newnum.toLocaleString()}`;
    } else return "NaN";
};


export const scrollParentToChild = (parent, child) => {

  // Where is the parent on page
  const parentRect = parent.getBoundingClientRect();
  // What can you see?
  const parentViewableArea = {
      height: parent.clientHeight,
      width: parent.clientWidth
  };

  // Where is the child
  const childRect = child.getBoundingClientRect();
  // Is the child viewable?
  const isViewable = (childRect.top >= parentRect.top) && (childRect.bottom <= parentRect.top + parentViewableArea.height);

  // if you can't see the child try to scroll parent
  if (!isViewable) {
      // Should we scroll using top or bottom? Find the smaller ABS adjustment
      const scrollTop = childRect.top - parentRect.top;
      const scrollBot = childRect.bottom - parentRect.bottom;
      if (Math.abs(scrollTop) < Math.abs(scrollBot)) {
          // we're near the top of the list
          parent.scrollTop += scrollTop;
      } else {
          // we're near the bottom of the list
          parent.scrollTop += scrollBot;
      }
  }

  
}

