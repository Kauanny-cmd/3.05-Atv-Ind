import styles from './Post.module.css';

import trash from '../../assets/trash.svg';

export function Post(props) {
  return (
    <div className={styles.container}>
      {
        // eslint-disable-next-line react/prop-types
        props.messages.map((item, index) => {
          return (
            <>
              <div className={styles.messages}>
                <img src={item.photo} alt="" />
                <p key={index}>{item.text}</p>
                {
                  item.trash
                    ? <img src={trash} />
                    : <></>
                }
              </div>
            </>
          )
        })
      }
    </div>
  )
}