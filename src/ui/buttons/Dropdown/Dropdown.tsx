// import React, { useState, useEffect, useRef } from 'react';
// import './Dropdown.scss';

// type DropdownItem = {
//   label: string;
//   value: string;
// };

// type Props = {
//   items: DropdownItem[];
// };

// export const Dropdown: React.FC<Props> = ({ items }) => {
//   const [selectedItem, setSelectedItem] = useState<DropdownItem | null>(null);
//   const [isOpen, setIsOpen] = useState(false);
//   const coverRef = useRef<HTMLButtonElement>(null);

//   const handleItemClick = (item: DropdownItem) => {
//     setSelectedItem(item);
//     setIsOpen(false);
//   };

//   const closeTheModal = () => {
//     setIsOpen(false);
//   };

//   const useClickOutside = (
//     ref: React.RefObject<HTMLButtonElement>,
//     callback: () => void,
//   ) => {
//     const handleClick = (e: MouseEvent) => {
//       if (ref.current && !ref.current.contains(e.target as Node)) {
//         callback();
//       }
//     };

//     useEffect(() => {
//       document.addEventListener('click', handleClick);

//       return () => {
//         document.removeEventListener('click', handleClick);
//       };
//     });
//   };

//   useClickOutside(coverRef, closeTheModal);

//   return (
//     <div className="dropdown">
//       <button
//         className="dropdown-toggle"
//         onClick={() => setIsOpen(!isOpen)}
//         ref={coverRef}
//       >
//         {selectedItem ? selectedItem.label : 'Select an item'}
//       </button>
//       {isOpen && (
//         <ul className="dropdown-menu">
//           {items.map(item => (
//             <li key={item.value} onClick={() => handleItemClick(item)}>
//               {item.label}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };
