import firebase, { database } from '../../firebase';

export const actionUserName = () => (dispatch) => {
    setTimeout(() => {
        return dispatch({ type: 'CHANGE_USER', value: 'Dodi Alexsander' })
    }, 2000)
}

export const registerUserAPI = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch({ type: 'CHANGE_LOADING', value: true })
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then(res => {
                console.log('success: ', res);
                dispatch({ type: 'CHANGE_LOADING', value: false })
                resolve(true)
            })
            .catch(function (error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                dispatch({ type: 'CHANGE_LOADING', value: false })
                reject(false)
            })
    })
}

export const loginUserAPI = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch({ type: 'CHANGE_LOADING', value: true })
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
            .then(res => {
                // console.log('success: ', res);
                const dataUser = {
                    email: res.user.email,
                    uid: res.user.uid
                }
                dispatch({ type: 'CHANGE_LOADING', value: false })
                dispatch({ type: 'CHANGE_ISLOGIN', value: true })
                dispatch({ type: 'CHANGE_USER', value: dataUser })
                resolve(dataUser)
            })
            .catch(function (error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                dispatch({ type: 'CHANGE_LOADING', value: false })
                dispatch({ type: 'CHANGE_ISLOGIN', value: false })
                reject(false)
            })
    })
}

export const addDataToAPI = (data) => (dispatch) => {
    database.ref('artikel/' + data.userId).push({
        title: data.title,
        content: data.content,
        date: data.date
    })
}

export const getDataFromAPI = (userId) => (dispatch) => {
    const urlArtikel = database.ref('artikel/' + userId);
    return new Promise((resolve, reject) => {
        urlArtikel.on('value', function (snapshot) {
            console.log('get Data: ', snapshot.val())

            const data = [];
            Object.keys(snapshot.val()).map(key => {
                return (
                    data.push({
                        id: key,
                        data: snapshot.val()[key]
                    })
                )
            });
            dispatch({ type: 'SET_ARTIKEL', value: data })
            resolve(snapshot.val());
        });
    })

}