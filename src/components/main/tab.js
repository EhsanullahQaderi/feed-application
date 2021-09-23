import React, { useEffect, useState } from "react";
import TabPane from "./tab-pane";

const Tabs = (props) => {
  const { children } = props;
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false)
  const [tabHeader, setTabHeader] = useState([]);
  const [childContent, setChildConent] = useState({});
  const [active, setActive] = useState("");
  useEffect(() => {
    const headers = [];
    const childCnt = {};
    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return;
      const { name } = element.props;
      const {icon } = element.props
      headers.push(name);
      childCnt[name] = element.props.children;
    });

    console.log(childCnt)
    setTabHeader(headers);
    setActive(headers[0]);
    setChildConent({ ...childCnt });
    console.log(childCnt);
  }, [props, children]);

  const changeTab = (name) => {
    setActive(name);
  };

  const openSearchBar = () =>{

    setIsSearchBarOpen(true)
  }

  const closeSearchBar = () =>{

    setIsSearchBarOpen(false)
  }

  return (
    <div className="tabs">
      <div className = "d-flex justify-content-between header">
        {!isSearchBarOpen && 
        <ul className="tab-header d-flex justify-content-between">
        {tabHeader.map((item) => (
          <li
            onClick={() => changeTab(item)}
            key={item}
            className={item === active ? "active" : ""}
          >
            {item}

            
          </li>
        ))}
      </ul>

        }


            <div className = {"search d-flex justify-content-center " +(isSearchBarOpen ? 'show' : '')}>

            <i className = "fa fa-search search-icon"></i>
            <input onClick={openSearchBar} name="friend" type="text" placeholder = "Search Friend ..."/>
            {isSearchBarOpen && 
            <i onClick = {closeSearchBar} className = "fa fa-times close-icon"></i>
            
            }

      </div>
      </div>
     
      <div className="tab-content">
        {Object.keys(childContent).map((key) => {
          if (key === active) {
            return <div class="tab-child">{childContent[key]}</div>;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  children: function (props, propName, componentName) {
    const prop = props[propName];

    let error = null;
    React.Children.forEach(prop, function (child) {
      if (child.type !== TabPane) {
        error = new Error(
          "`" + componentName + "` children should be of type `TabPane`."
        );
      }
    });
    return error;
  }
};

export default Tabs;
