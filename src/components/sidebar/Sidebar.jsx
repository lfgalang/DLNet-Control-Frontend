import React from 'react'
import { connect } from 'react-redux'

import "./sidebar.css"

export const Sidebar = (props) => {
    return (
        <div className="sidebarContainer">
            <div className="logo"></div>
            <div className="menuButtons">
                <button>
                    <img src="" alt="" />
                    <h3>Nuevo proyecto</h3>
                </button>
                <button>
                    <img src="" alt="" />
                    <h3>Nueva cartilla</h3>
                </button>
                <button>
                    <img src="" alt="" />
                    <h3>Administrar cartilla</h3>
                </button>
                <button>
                    <img src="" alt="" />
                    <h3>Agenda</h3>
                </button>
                <button>
                    <img src="" alt="" />
                    <h3>Estadísticas</h3>
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({ state })

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)