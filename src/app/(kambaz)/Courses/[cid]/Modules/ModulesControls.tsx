import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "react-bootstrap"
import { FaPlus, FaBan } from "react-icons/fa6"
import GreenCheckmark from "./GreenCheckmark"

export default function ModulesControls() {
  return (
    <div
      id="wd-modules-controls"
      className="d-flex justify-content-end align-items-center gap-2"
      style={{ overflow: "visible", flexWrap: "nowrap" }}
    >
      <style>{`
        .btn-responsive { 
          padding: .5rem .9rem; 
          font-size: 1rem; 
          line-height: 1.2;
          white-space: nowrap;
        }
        .icon-gap { 
          margin-right: .5rem; 
          position: relative; 
          top: -1px; 
        }
        
        /* Prevent text wrapping at all screen sizes */
        #wd-modules-controls {
          flex-wrap: nowrap !important;
        }
        
        #wd-modules-controls button,
        #wd-modules-controls .dropdown-toggle {
          white-space: nowrap !important;
        }
        
        #wd-modules-controls button span,
        #wd-modules-controls .dropdown-toggle span {
          white-space: nowrap !important;
        }
      
        @media (max-width: 576px){
          .btn-responsive { 
            padding: .3rem .55rem; 
            font-size: .85rem; 
          }
          .icon-gap { 
            margin-right: .35rem; 
          }
        }
      `}</style>

      <Button variant="secondary" className="btn-responsive">
        <span className="d-none d-sm-inline">Collapse All</span>
        <span className="d-inline d-sm-none">Collapse</span>
      </Button>

      <Button variant="secondary" className="btn-responsive">
        <span className="d-none d-sm-inline">View Progress</span>
        <span className="d-inline d-sm-none">Progress</span>
      </Button>

      <Dropdown>
        <DropdownToggle variant="secondary" className="btn-responsive">
          <GreenCheckmark />
          <span className="ms-2 d-none d-sm-inline">Publish All</span>
          <span className="ms-2 d-inline d-sm-none">Publish</span>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            <GreenCheckmark /> Publish All
          </DropdownItem>
          <DropdownItem>
            <GreenCheckmark /> Publish all modules and items
          </DropdownItem>
          <DropdownItem>
            <GreenCheckmark /> Publish modules only
          </DropdownItem>
          <DropdownItem>
            <FaBan className="text-danger me-2" /> Unpublish all modules and items
          </DropdownItem>
          <DropdownItem>
            <FaBan className="text-danger me-2" /> Unpublish modules only
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <Button variant="danger" className="btn-responsive">
        <FaPlus className="icon-gap" />
        Module
      </Button>
    </div>
  )
}
