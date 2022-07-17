import React from "react";

const Modal = props => {
    if (!props.show) {
        return null
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Tokenomics</h4>
                </div>
                <div className="modal-body">
                    <table>
                        <tr>
                            <th>Token Info</th>
                            <th>Allocation</th>
                        </tr>
                        <tr>
                            <td>Total Supply</td>
                            <td>50,000,000</td>
                        </tr>
                        <tr>
                            <td>Liquidity</td>
                            <td>40%</td>
                        </tr>
                        <tr>
                            <td>Farm Reward</td>
                            <td>30%</td>
                        </tr>
                        <tr>
                            <td>Team</td>
                            <td>20%</td>
                        </tr>
                        <tr>
                            <td>Burn</td>
                            <td>10%</td>
                        </tr>
                    </table>
                </div>
                <div className="modal-footer">
                    <button onClick={props.onClose} className="button-5" role="button">Close</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;