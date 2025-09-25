import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCog, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components"

const SettingSect = styled.div`
  width: 90%;
  height: 20%;
  margin-top: 100%;
  display: flex;
  flex-direction: column;
`
const SettingsText = styled.p`
  color: #3F3F3F;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
`
const SettingContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`

const IconSettings = styled(FontAwesomeIcon)`
  font-size: 1rem;
  margin-right: 0.9rem;
`

const Logout = styled.div`
  color: #F13E3E;
  text-align: center;
  margin-top: 0.5rem;
  font-size: 1.2rem;
`

const SettingsBoard = () => {

    return (
        <SettingSect>
            <SettingsText>
                SETTINGS
            </SettingsText>
            <SettingContent>
                <IconSettings icon={faCog} />
                Settings
            </SettingContent>
            <Logout>
                <IconSettings icon={faSignOutAlt} className={"fa-rotate-180"} />
                Logout
            </Logout>
        </SettingSect>
    )
}

export default SettingsBoard 