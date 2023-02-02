import React from "react";

function ListResult(props) {
    return (
        <div>
            <ul>
                <li>{props.list.breakfast && props.list.breakfast.length > 0 ? props.list.breakfast.map(product => {
                        return (
                            <>
                            <ul>
                                <li><span>{product.title}</span>
                                <span>{product.nutrition.calories}</span>
                                <span>{product.nutrition.fat}</span>
                                <span>{product.nutrition.carbs}</span>
                                <span>{product.nutrition.protein}</span></li>
                            </ul>
                            </>
                        )
                    }) : ''}
                </li>
                <li>{props.list.secondBreakfast && props.list.secondBreakfast.length > 0 ? props.list.secondBreakfast.map(product => {
                    return (
                        <>
                        <ul>
                            <li><span>{product.title}</span>
                            <span>{product.nutrition.calories}</span>
                            <span>{product.nutrition.fat}</span>
                            <span>{product.nutrition.carbs}</span>
                            <span>{product.nutrition.protein}</span></li>
                        </ul>
                        </>
                    )
                }) : ''}
                </li>
                <li>{props.list.dinner && props.list.dinner.length > 0 ? props.list.dinner.map(product => {
                    return (
                        <>
                        <ul>
                            <li><span>{product.title}</span>
                            <span>{product.nutrition.calories}</span>
                            <span>{product.nutrition.fat}</span>
                            <span>{product.nutrition.carbs}</span>
                            <span>{product.nutrition.protein}</span></li>
                        </ul>
                        </>
                    )
                }) : ''}
                </li>
                <li>{props.list.supper && props.list.supper.length > 0 ? props.list.supper.map(product => {
                    return (
                        <>
                        <ul>
                            <li><span>{product.title}</span>
                            <span>{product.nutrition.calories}</span>
                            <span>{product.nutrition.fat}</span>
                            <span>{product.nutrition.carbs}</span>
                            <span>{product.nutrition.protein}</span></li>
                        </ul>
                        </>
                    )
                }) : ''}
                </li>
            </ul>
        </div>
    );
}

export default ListResult;