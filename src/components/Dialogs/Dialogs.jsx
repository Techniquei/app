import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <div className={s.dialog + ' '+ s.active}>
                    chat 1
                </div>
                <div className={s.dialog}>
                    chat 2
                </div>
                <div className={s.dialog}>
                    chat 3
                </div>
                <div className={s.dialog}>
                    chat 4
                </div>
                <div className={s.dialog}>
                    chat 5
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>hello </div>
                <div className={s.message}> vewvwe</div>
                <div className={s.message}>acwac</div>
                <div className={s.message}>a</div>
                <div className={s.message}>,ik,u</div>
            </div>
        </div>


    )
}
export { Dialogs }