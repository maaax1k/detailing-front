import React, {useState} from 'react';
import CusButton from "../UI/button/CusButton";
import PostItem from "../components/PostItem";
import {type} from "@testing-library/user-event/dist/type";
import * as events from "events";

const FeedbackPage = () => {
    const [posts, setPosts] = useState([
        {id: 1, name : "Максим", mark: 4, comment: "Хороший детейлинг"},
        {id: 2, name : "Карим", mark: 5, comment: "Отличная работа"},
        {id: 3, name : "Ренат", mark: 1, comment: "Сервис отвратительный"}])

    const [post, setPost] = useState({
        name: '',
        mark: 5,
        comment:''
    })

    const [filtPosts, setFiltPosts] = useState(posts)


    const addNew = () =>{
        if (post.name === '' || post.comment === ''){
            alert("Вы ввели не все данные")
        }
        else {
            setPosts([...posts, {...post, id: Date.now()}])
            if(selFilt === 'bad' && post.mark < 3)
            {
                setFiltPosts([...filtPosts, {...post, id: Date.now()}])
            }
            else if(selFilt === 'good' && post.mark >= 3)
            {
                setFiltPosts([...filtPosts, {...post, id: Date.now()}])
            }
            else if (selFilt === 'all') {
                console.log("dasdksad")
                setFiltPosts([...filtPosts, {...post, id: Date.now()}])
            }
            setPost({name: '', mark: 5, comment: ''})
        }
    }

    const removePost = (post) =>{
        setPosts(posts.filter(p => p.id !== post.id))
        if(selFilt === 'bad')
        {
            setFiltPosts(posts.filter(p => p.id !== post.id && p.mark < 3))
        }
        else if(selFilt === 'good')
        {
            setFiltPosts(posts.filter(p => p.id !== post.id && p.mark >= 3))
        }
        else {
            setFiltPosts(posts.filter(p => p.id !== post.id))
        }
    }

    const [selFilt, setSelFil] = useState('all')

    const filter = (type) =>{
        setSelFil(type)
        switch (type){
            case 'bad':
                setFiltPosts(posts.filter(p => p.mark < 3))
                break;
            case 'good':
                setFiltPosts(posts.filter(p => p.mark >= 3))
                break;
            default:
                setFiltPosts(posts)
                break;
        }
        console.log(filtPosts)
    }

    return (
        <div className="comments">
            <div className="comment-form">
                <h3>Новый Комментарий</h3>
                <div className="inputs">
                    <span className="comment-input" style={{width: "80%"}}>
                        <label htmlFor="name">Ваше Имя: </label>
                        <input id="name" placeholder="Введите Имя" value={post.name} onChange={event => setPost({...post, name: event.target.value})}/>
                    </span>
                    <span className="comment-input" style={{width: "18%"}}>
                        <label htmlFor="mark">Оценка: </label>
                        <input id="mark" type="number" min="1" max="5" placeholder="1-5" value={post.mark} onChange={event => setPost({...post, mark: event.target.value})}/>
                    </span>
                </div>
                <textarea id="comment" placeholder="Комментарий" value={post.comment} onChange={event => setPost({...post, comment: event.target.value})}/>
                <CusButton onClick={addNew}>Опубликовать</CusButton>
            </div>
            <select  onChange={event => filter(event.target.value)} className="filter">
                <option value="all">Все</option>
                <option value="good">Хорошие</option>
                <option value="bad">Плохие</option>
            </select>
            {filtPosts.map(post=>
                <PostItem post={post} remove={removePost} key={post.id}/>
            )
            }
        </div>
    );
};

export default FeedbackPage;