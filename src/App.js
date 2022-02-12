import Api from './Api'
import Alert from './Alert'

const App = () => {    
    return (
        <div style={{ maxWidth: '800px', margin: 'auto', marginTop: '40px' }}>
            <h1>Fetch API Example</h1>
            <p>The API will be called within 1 second after no more changes to the state</p>
            <Api />
            <br />
            <br />
            <br />
            <h1>Alert Example</h1>
            <p>alert will appear within 1 second after no more changes to the state</p>
            <Alert />
            <br />
            <br />
            <h1>Support Developer</h1>
            <h3>
                <a href="https://trakteer.id/bakunya/tip">Support me on Trakteer</a>
            </h3>
            <h3>
                <a href="https://raw.githubusercontent.com/bakunya/debounce-hooks">Github repository</a>
            </h3>
        </div>
    )
}
  
export default App