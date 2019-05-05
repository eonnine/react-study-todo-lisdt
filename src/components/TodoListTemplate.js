import React, { Component } from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({form, children}) => {
    return (
        <main className="todo-list-template">
            <div className="title">
                오늘 할 일
            </div>
            <section>
                {form}
            </section>
            <section>
                {children}
            </section>
        </main>
    )
}

export default TodoListTemplate;