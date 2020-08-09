/**
 * Check out {@link https://www.notion.so/Mono-Connect-Widget-66bd23e4b7194ce99ed4998b378fcc74} for more information.
 */
export interface MonoProps {
  /**
   * function to be called when the mono connection is closed
   */
  onClose: () => void;
  /**
   * function to be called when the mono connection is successful. After enrolment occurs, Mono Connect passes back a code which your product can use with your secret key to call Mono API.
   */
  onSuccess: (response: { code: string }) => void;
}

export interface MonoConfig {
  public_key: string;
}
