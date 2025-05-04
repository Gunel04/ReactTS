interface buttonType {
    content: string,
    type: string | null,
    background: string,
    color: string,
    disabled: boolean,
    width: number,
    height: number,


    modalTitle: string,
    modalText:string
}


const Button: React.FC<buttonType> = ({ content, background, color, disabled, width, height, modalTitle, modalText }) => {
    const btnStyle = {
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: `${background}`,
        color: `${color}`
    }
    return (
        <div>
            <button data-bs-toggle="modal" data-bs-target="#exampleModal" disabled={disabled} style={btnStyle}>
                {content}
            </button>

            <div className="modal" id="exampleModal" tabIndex={-1}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{modalTitle}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <p>{modalText}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Button