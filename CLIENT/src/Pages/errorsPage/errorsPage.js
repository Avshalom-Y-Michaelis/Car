import BaseWindow from '../../Components/baseWindow/baseWindow';
import enumsStore from '../../Stores/enumsStore.json';
import colorStor from '../../Stores/ColorStore.json';
import API from '../../Api/rest';
import ErrorsButton from '../../Components/errorsButton/errorsButton';
function ErrorsPage() {
    const TITEL = 'Diagnostic Trouble';

    return (
        <div style={{ margin: 'auto', width: '80%', height: '80%' }}>
            <BaseWindow
                shadowColor={colorStor.shadow.orenge}
                shadowH={enumsStore.shadowDirection.down}
                shadowV={enumsStore.shadowDirection.left}
                titel={TITEL}
                content={<div>
                            <ErrorsButton />
                        </div>}
            />
        </div>
    );
}

export default ErrorsPage;
