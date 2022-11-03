import { When } from './When';

export default function App() {
    return (
        <div>
            <fieldset>
                <legend>When</legend>

                <When condition={2 + 2 === 4}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio laborum maiores quae saepe
                        suscipit unde veritatis voluptates! Amet architecto, esse excepturi fugiat iure molestiae, possimus
                        qui quidem quo tempora tempore!
                    </p>
                </When>
            </fieldset>
        </div>
    )
}
