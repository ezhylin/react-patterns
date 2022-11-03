import { When } from './When';
import { Unless } from "./Unless";
import { FeatureFlag } from "./FeatureFlag";

export default function App() {
    return (
        <div>
            <fieldset>
                <legend>When</legend>

                <When condition={2 + 2 === 4}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio laborum maiores quae saepe
                        suscipit unde veritatis voluptates! Amet architecto, esse excepturi fugiat iure molestiae, possimus qui quidem quo tempora tempore!
                    </p>
                </When>
            </fieldset>

            <fieldset>
                <legend>Unless</legend>
                <Unless condition={2 + 1 === 4}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio laborum maiores quae saepe
                        suscipit unde veritatis voluptates! Amet architecto, esse excepturi fugiat iure molestiae, possimus qui quidem quo tempora tempore!
                    </p>
                </Unless>
            </fieldset>

            <fieldset>
                <legend>Feature Flag</legend>
                <FeatureFlag name="passport" fallback={<button>Sign on</button>}>
                    <section>
                        <h1>Sign on via</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur at, commodi cumque,
                            dolorem eum magni minus nam nostrum optio quidem sed similique veniam! Aliquid beatae consectetur maxime molestias perferendis.
                        </p>
                        <button>Google</button>
                        <button>...</button>
                        <button>Facebook</button>
                    </section>
                </FeatureFlag>
            </fieldset>
        </div>
    )
}
